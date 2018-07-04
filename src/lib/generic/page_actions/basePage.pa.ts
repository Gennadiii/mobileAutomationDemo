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
  private currentPage;

  setPages(pageActions) {
    this.pages = pageActions.map(pageAction => pageAction.page);
  }

  isOpen(params = {timeout: 20 * 1000}) {
    const {timeout} = params;
    return this.checkElementsDisplayed(
      this.getStaticElements,
      timeout,
      'page is opened');
  }

  contentIsDisplayed(params = {timeout: 20 * 1000}) {
    const {timeout} = params;
    return this.checkElementsDisplayed(
      this.getContent,
      timeout,
      'page content is displayed');
  }

  async verifyIsOpen() {
    if (!await this.isOpen()) {
      throw new Error(`"${this.currentPage.name}" page didn't get opened`);
    }
  }

  private checkElementsDisplayed(getElements, timeout, logMessage) {
    const isDisplayedArr = [];
    if (!this.pages) {
      this.pages = [this.page];
    }
    this.pages.forEach(page => {
      this.currentPage = page;
      log.info(`Checking if "${page.name}" ${logMessage}`);
      isDisplayedArr.push(...getElements()
        .map(element => element.waitUntilDisplayed(timeout)
          .catch(() => false)));
    });
    return helper.promise.allTrue(isDisplayedArr);
  }

  private getStaticElements = () => {
    return this.currentPage.staticElements;
  }

  private getContent = () => {
    return this.currentPage.content;
  }

}


export {BasePagePa};
