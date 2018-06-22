import {helper} from "../../../helpers/helper";
import {pointCoordinatesInterface} from "../../../helpers/appium.helper";


const log = helper.logger.get('Component');


interface ComponentInterface {
  // get
  getLocation: () => Promise<pointCoordinatesInterface>;
  // check
  isDisplayed: () => Promise<boolean>;
  // wait
  waitUntilDisplayed: (timeout: number) => Promise<boolean>;
}


class Component implements ComponentInterface {

  constructor(protected ef) {
  }

  get element() {
    return this.ef();
  }

  // get

  getLocation() {
    return this.element.getLocation();
  }

  // check

  async isDisplayed() {
    try {
      return await this.element.isDisplayed();
    } catch (err) {
      if (err.message.includes('NoSuchElement')) {
        return false;
      } else {
        throw err;
      }
    }
  }

  // wait

  waitUntilDisplayed(timeout) {
    log.info(`Waiting until element is displayed using "${this.ef.using}" with value: ${this.ef.value}`);
    return helper.waiters.appiumWait(async () => {
      return await this.isDisplayed();
    }, timeout);
  }

}


export {Component};
