import {helper} from "../../../helpers/helper";
import {pointCoordinatesInterface} from "../../../helpers/appium.helper";
import {driver} from "../../../../index";


const log = helper.logger.get('Component');


interface ComponentInterface {
  // get
  getLocation: () => Promise<pointCoordinatesInterface>;
  getAttribute: (attribute: string) => Promise<string>;
  // check
  isDisplayed: () => Promise<boolean>;
  scrollUntilDisplayed: (params: scrollUntilDisplayedInterface) => Promise<boolean>;
  // wait
  waitUntilDisplayed: (timeout: number) => Promise<boolean>;
}


class Component implements ComponentInterface {

  constructor(protected ef) {
  }

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
        await helper.dateTime.sleep(100);
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
  async isDisplayed() {
    try {
      return (await this.element).isDisplayed();
    } catch (err) {
      if (err.message.includes('NoSuchElement')) {
        return false;
      } else {
        throw err;
      }
    }
  }

  async scrollUntilDisplayed(params = {maxScrolls: 3}) {
    let {maxScrolls} = params;
    log.info(`Looking for element with max scrolls: ${maxScrolls}`);
    try {
      driver.setImplicitTimeout(500);
      while (maxScrolls--) {
        const isDisplayed = await this.isDisplayed();
        if (isDisplayed) {
          return isDisplayed;
        }
        const currentState = await driver.takeScreenshot();
        await helper.dateTime.sleep(200);
        await driver.scrollDown();
        if (currentState === await driver.takeScreenshot()) {
          log.info(`Reached the bottom`);
          break;
        }
      }
      return await this.isDisplayed();
    } finally {
      driver.setImplicitTimeout(driver.defaultImplicitWait);
    }
  }

  // wait
  waitUntilDisplayed(timeout) {
    log.info(`Waiting until element is displayed using "${this.ef.using}" with value: ${this.ef.value}`);
    return helper.waiters.appiumWait(() => this.isDisplayed(), timeout);
  }

}


export {Component};


function throwUnexpectedError(efFunc, err) {
  log.error(`Couldn't find element using: "${efFunc.using}" with value: ${efFunc.value}: ${err}`);
  throw err;
}

function throwNoSuchElementError(efFunc) {
  const errorMessage = `Element is not found using: "${efFunc.using}" with value: ${efFunc.value}`;
  driver.implicitWait > 1000 && log.warn(errorMessage);
  throw new Error(`NoSuchElement: ${errorMessage}`);
}


interface scrollUntilDisplayedInterface {
  maxScrolls: number;
}

