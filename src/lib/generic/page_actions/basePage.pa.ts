import {helper} from "../../../helpers/helper";
import {BasePagePo} from "../page_objects/basePage.po";


const log = helper.logger.get('BasePagePa');
const basePagePo = new BasePagePo();


interface BasePagePaInterface {
  // set
  setPages: (pages: any[]) => void;
  // checks
  isOpen: () => Promise<boolean>;
  verifyIsOpen: () => Promise<void>;
  contentIsDisplayed: () => Promise<boolean>;
}


class BasePagePa implements BasePagePaInterface {

  protected page: any = basePagePo; // Type any is to avoid inheritance issues
  protected pages: any = false;

  setPages(pageActions) {
    this.pages = pageActions.map(pageAction => pageAction.page);
  }

  async isOpen(params = {timeout: 15 * 1000}) {
    const {timeout} = params;
    if (!this.pages) {
      this.pages = [this.page];
    }
    const isDisplayedArr = [];
    this.pages.forEach(page => {
      log.info(`Checking if "${page.name}" page is opened`);
      isDisplayedArr.push(...page.staticElements
        .map(element => element.waitUntilDisplayed(timeout)));
    });
    return helper.promise.allTrue({arr: isDisplayedArr});
  }

  async contentIsDisplayed(params = {timeout: 15 * 1000}) {
    const {timeout} = params;
    if (!this.pages) {
      this.pages = [this.page];
    }
    const isDisplayedArr = [];
    this.pages.forEach(page => {
      log.info(`Checking if "${page.name}" page content is displayed`);
      isDisplayedArr.push(...page.content
        .map(element => element.waitUntilDisplayed(timeout)));
    });
    return helper.promise.allTrue({arr: isDisplayedArr});
  }

  async verifyIsOpen() {
    if (!await this.isOpen()) {
      throw new Error(`Page didn't get opened`);
    }
  }

}


export {BasePagePa};
