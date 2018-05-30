import {helper} from "../../helpers/helper";


interface ComponentInterface {
  // get
  getText: () => Promise<string>;
  // check
  isDisplayed: () => Promise<boolean>;
  // wait
  waitUntilDisplayed: (timeout: number) => Promise<boolean>;
}


class Component implements ComponentInterface {

  constructor(protected ef) {
  }

  protected get element() {
    return this.ef();
  }

  async isDisplayed() {
    return this.element.isDisplayed();
  }

  async getText() {
    return this.element.text();
  }

  waitUntilDisplayed(timeout) {
    return helper.waiters.appiumWait(async () => {
      try {
        return await this.element.isDisplayed()
      } catch (err) {
        return false;
      }
    }, timeout);
  }

}


export {Component};
