import {helper} from "../../../helpers/helper";


const log = helper.logger.get('BasePa');


interface BasePaInterface {
  // checks
  isOpen: (params: isOpenInterface) => Promise<boolean>;
  verifyIsOpen: (params: isOpenInterface) => Promise<void>;
}


/**
 * BasePa is the parent class for each page actions class.
 * It's purpose is to check that certain elements are displayed.
 * Elements are taken from this.page property which is passed in every child page action class in constructor
 */
class BasePa implements BasePaInterface {

  protected page;

  isOpen(params: isOpenInterface = {}) {
    const {timeout = 20 * 1000, useSize} = params;
    return this.checkElementsDisplayed(
      this.page.staticElements,
      timeout,
      'page is opened',
      useSize);
  }

  async verifyIsOpen(params: isOpenInterface = {}) {
    if (!await this.isOpen(params)) {
      throw new Error(`"${this.page.name}" page didn't get opened`);
    }
  }

  protected checkElementsDisplayed(elements, timeout, logMessage, useSize) {
    const isDisplayedArr = [];
    log.info(`Checking if "${this.page.name}" ${logMessage}`);

    isDisplayedArr.push(...elements
      .map(element => element.waitUntilDisplayed(timeout, {useSize, throwError: false})));
    return helper.promise.allTrue(isDisplayedArr);
  }

}


export {BasePa, isOpenInterface};


interface isOpenInterface {
  timeout?: number;
  useSize?: boolean;
  retry?: number;
}

