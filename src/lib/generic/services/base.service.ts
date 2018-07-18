import {helper} from "../../../helpers/helper";
import {isOpenInterface} from "../page_actions/base.pa";


interface BaseServiceInterface {
  pageIsOpen: (params: isOpenInterface) => Promise<boolean>;
  verifyPageIsOpen: (params: isOpenInterface) => Promise<void>;
}


const log = helper.logger.get('BaseService');


/**
 * BaseService is the parent class for each service class.
 * Main purpose of base service is to check that physical page is opened
 * Service can consist of single or multiple pages
 * To check all pages including logical you have to add those logical pages
 * in staticLogicalPages property of child class
 */
class BaseService implements BaseServiceInterface {

  protected staticLogicalPages = [];
  protected page;

  async pageIsOpen(params: isOpenInterface = {timeout: 20 * 1000}) {
    log.info(`Checking if physical "${this.page.page.name}" page is open`);
    let result = true;
    result = result && this.page.isOpen(params);
    /* tslint:disable-next-line */ // replace with "for await of" after moving to node 10
    for (let j = 0; j < this.staticLogicalPages.length; j++) {
      result = result && await this.staticLogicalPages[j].isOpen(params);
    }
    return result;
  }

  async verifyPageIsOpen(params: isOpenInterface = {timeout: 20 * 1000}) {
    if (!await this.pageIsOpen(params)) {
      throw new Error(`Physical "${this.page.page.name}" page didn't get opened`);
    }
  }

}


export {BaseService};
