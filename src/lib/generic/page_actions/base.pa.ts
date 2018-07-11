import {helper} from "../../../helpers/helper";


const log = helper.logger.get('BasePa');


interface BasePaInterface {
  // checks
  isOpen: () => Promise<boolean>;
  verifyIsOpen: () => Promise<void>;
  contentIsDisplayed: () => Promise<boolean>;
}


class BasePa implements BasePaInterface {

  protected page;

  isOpen(params = {timeout: 20 * 1000}) {
    const {timeout} = params;
    return this.checkElementsDisplayed(
      this.page.staticElements,
      timeout,
      'page is opened');
  }

  contentIsDisplayed(params = {timeout: 20 * 1000}) {
    const {timeout} = params;
    return this.checkElementsDisplayed(
      this.page.content,
      timeout,
      'page content is displayed');
  }

  async verifyIsOpen() {
    if (!await this.isOpen()) {
      throw new Error(`"${this.page.name}" page didn't get opened`);
    }
  }

  private checkElementsDisplayed(elements, timeout, logMessage) {
    const isDisplayedArr = [];
    log.info(`Checking if "${this.page.name}" ${logMessage}`);
    isDisplayedArr.push(...elements
      .map(element => element.waitUntilDisplayed(timeout)
        .catch(() => false)));
    return helper.promise.allTrue(isDisplayedArr);
  }

}


export {BasePa};
