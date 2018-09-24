import {helper} from "../../../helpers/helper";
import {pointCoordinatesInterface} from "../../../helpers/appium.helper";
import {driver} from "../../../../index";


const log = helper.logger.get('Component');


interface ComponentInterface {
  // actions
  click: () => Promise<void>;
  // get
  getLocation: () => Promise<pointCoordinatesInterface>;
  getAttribute: (attribute: string) => Promise<string>;
  getSize: () => Promise<sizeInterfaceInterface>;
  // check
  isPresent: () => Promise<boolean>;
  isDisplayed: (timeout?: number) => Promise<boolean>;
  isDisplayedUsingSize: () => Promise<boolean>;
  scrollUntilDisplayed: (params: scrollUntilDisplayedInterface) => Promise<boolean>;
  // wait
  waitUntilDisplayed: (timeout: number, useSize?) => Promise<boolean>;
  waitUntilDisappear: (timeout: number) => Promise<boolean>;
  // verify
  verifyDisplayed: () => Promise<any>;
}


class Component implements ComponentInterface {

  constructor(protected ef) {
  }

  /**
   * Looks for element by calling element finder function
   * Implicitly waits for an element. Returns element if found or throws error
   * @return {Promise<any>}
   */
  get element() {
    return (async () => {
      const getTime = () => +new Date();
      const startTime = getTime();
      do {
        try {
          const foundElement = await this.ef();
          if (foundElement) {
            return foundElement;
          }
        } catch (err) {
          if (!err.message.includes('NoSuchElement')) {
            throwUnexpectedError(this.ef, err);
          }
        }
        await helper.dateTime.sleep(100, {ignoreLog: true});
      } while (getTime() - startTime < driver.implicitWait);
      throwNoSuchElementError(this.ef);
    })();
  }

  // actions
  async click() {
    await (await this.element).click();
  }

  // get
  async getLocation() {
    return (await this.element).getLocation();
  }

  async getAttribute(attribute) {
    return (await this.element).getAttribute(attribute);
  }

  async getSize(): Promise<sizeInterfaceInterface> {
    return (await this.element).getSize();
  }

  // check
  async isPresent() {
    try {
      await this.element;
      return true;
    } catch (err) {
      if (err.message.includes('NoSuchElement')) {
        return false;
      } else {
        throw err;
      }
    }
  }

  async isDisplayed(timeout?: number) {
    try {
      timeout && driver.setImplicitTimeout(timeout);
      if (await this.isPresent()) {
        driver.setImplicitTimeout(0);
        return await (await this.element).isDisplayed();
      }
      return false;
    } finally {
      timeout && driver.setImplicitTimeout(driver.defaultImplicitWait);
    }
  }

  async isDisplayedUsingSize() {
    const size = await this.isPresent() && await this.getSize();
    return size && !!(size.width + size.height);
  }

  /**
   * Looks for element. If not found - scrolls down. Limited by amounts of scrolls in order to prevent infinite loop
   * Takes screenshots before and after scrolls. Stops if screenshots are identical which means the bottom is reached
   * @param {{maxScrolls: number}} params
   * @return {Promise<any>}
   */
  async scrollUntilDisplayed(params = {maxScrolls: 3}) {
    let {maxScrolls} = params;
    log.info(`Looking for element with max scrolls: ${maxScrolls}`);
    while (maxScrolls--) {
      const isDisplayed = await this.isDisplayed();
      if (isDisplayed) {
        return isDisplayed;
      }
      const currentState = await driver.takeScreenshot();
      await driver.scrollDown();
      await helper.dateTime.sleep(200, {ignoreLog: true});
      if (currentState === await driver.takeScreenshot()) {
        log.info(`Reached the bottom`);
        break;
      }
    }
    return this.isDisplayed();
  }

  // wait
  waitUntilDisplayed(timeout, params = {useSize: false, throwError: true}) {
    log.info(`Waiting until element is displayed using "${this.ef.using}" with value: ${this.ef.value}`);
    const {useSize, throwError} = params;
    const isDisplayedFunc = useSize
      ? this.isDisplayedUsingSize.bind(this)
      : this.isDisplayed.bind(this);
    return helper.waiters.appiumWait(() => isDisplayedFunc(), timeout, {throwError});
  }

  waitUntilDisappear(timeout) {
    log.info(`Waiting until element disappears using "${this.ef.using}" with value: ${this.ef.value}`);
    return helper.waiters.appiumWait(async () => !await this.isPresent(), timeout);
  }

  // verify
  async verifyDisplayed() {
    return (await this.element).isDisplayed();
  }

}


export {Component};


function throwUnexpectedError(efFunc, err) {
  log.error(`Couldn't find element using: "${efFunc.using}" with value: ${efFunc.value}: ${err}`);
  throw err;
}

function throwNoSuchElementError(efFunc) {
  throw new Error(`NoSuchElement: Element is not found using: "${efFunc.using}" with value: ${efFunc.value}`);
}


interface scrollUntilDisplayedInterface {
  maxScrolls: number;
}


interface sizeInterfaceInterface {
  width: number;
  height: number;
}

