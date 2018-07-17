import {helper} from "../../../helpers/helper";
import {pointCoordinatesInterface} from "../../../helpers/appium.helper";
import {driver} from "../../../../index";


const log = helper.logger.get('Component');


interface ComponentInterface {
  // get
  getLocation: () => Promise<pointCoordinatesInterface>;
  getAttribute: (attribute: string) => Promise<string>;
  // check
  isPresent: () => Promise<boolean>;
  isDisplayed: () => Promise<boolean>;
  scrollUntilDisplayed: (params: scrollUntilDisplayedInterface) => Promise<boolean>;
  // wait
  waitUntilDisplayed: (timeout: number) => Promise<boolean>;
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
      while (getTime() - startTime < driver.implicitWait) {
        try {
          if (await this.ef()) {
            return this.ef();
          }
        } catch (err) {
          if (!err.message.includes('NoSuchElement')) {
            throwUnexpectedError(this.ef, err);
          }
        }
        await helper.dateTime.sleep(100, {ignoreLog: true});
      }
      throwNoSuchElementError(this.ef);
    })();
  }

  // get
  async getLocation() {
    return (await this.element).getLocation();
  }

  async getAttribute(attribute) {
    return (await this.element).getAttribute(attribute);
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

  async isDisplayed() {
    return await this.isPresent() && (await this.element).isDisplayed();
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
  waitUntilDisplayed(timeout) {
    log.info(`Waiting until element is displayed using "${this.ef.using}" with value: ${this.ef.value}`);
    return helper.waiters.appiumWait(() => this.isDisplayed(), timeout);
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

