import {helper} from "../../../helpers/helper";
import {pointCoordinatesInterface} from "../../../helpers/appium.helper";


const log = helper.logger.get('Component');


interface ComponentInterface {
  // get
  getLocation: () => Promise<pointCoordinatesInterface>;
  getSize: () => Promise<elementSizeInterface>;
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

  getLocation(): Promise<pointCoordinatesInterface> {
    return this.element.getLocation();
  }

  getSize(): Promise<elementSizeInterface> {
    return this.element.getSize();
  }

  // check

  async isDisplayed() {
    return this.element.isDisplayed();
  }

  // wait

  waitUntilDisplayed(timeout) {
    log.info(`Waiting until element is displayed using "${this.ef.using}" with value: ${this.ef.value}`);
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


interface elementSizeInterface {
  width: number;
  height: number;
}

