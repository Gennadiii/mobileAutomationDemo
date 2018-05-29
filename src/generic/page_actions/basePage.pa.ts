import {helper} from "../../helpers/helper";
import {BasePagePo} from "../page_objects/basePage.po";

const log = helper.logger.get('BasePagePa');
const basePagePo = new BasePagePo();


interface BasePagePaInterface {
  // checks
  checkIsOpen: () => Promise<boolean>;
  verifyIsOpen: () => Promise<void>;
}


class BasePagePa extends BasePagePo implements BasePagePaInterface {

  protected page: any = basePagePo; // Type any is to avoid inheritance issues

  async checkIsOpen(params = {timeout: 15 * 1000}) {
    log.info(`Checking if ${this.page.name} page is opened`);
    const {timeout} = params;
    const isDisplayedArr = this.page.staticElements
      .map(element => element.waitUntilDisplayed(timeout));
    return helper.promise.allTrue({arr: isDisplayedArr});
  }

  async verifyIsOpen() {
    if (!await this.checkIsOpen()) {
      throw new Error(`Page didn't get opened`);
    }
  }

}


export {BasePagePa};