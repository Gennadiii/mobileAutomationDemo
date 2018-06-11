import {helper} from "../../../helpers/helper";
import {pointCoordinatesInterface} from "../../../helpers/appium.helper";


const log = helper.logger.get('Component');


interface ComponentInterface {
  // get
  getText: () => Promise<string>;
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

  async getText() {
    log.info(`Getting text`);
    return this.element.text();
  }

  getLocation() {
    return this.element.getLocation();
  }

  // check

  async isDisplayed() {
    return this.element.isDisplayed();
  }

  // wait

  waitUntilDisplayed(timeout) {
    return helper.waiters.appiumWait(async () => {
      try {
        return await this.element.isDisplayed();
      } catch (err) {
        return false;
      }
    }, timeout);
  }

}


export {Component};
