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


  // Hack for this poor example. Remove constructor for real examples
  constructor() {
    if (!this.page) {
      this.page = {
        isOpen() {
          return Promise.resolve(true);
        },
        page: {name: 'No name'}
      };
    }

  }


  async pageIsOpen(params: isOpenInterface = {timeout: 30 * 1000}) {
    log.info(`Checking if physical "${this.page.page.name}" page is open`);
    const isOpenArr = [
      this.page.isOpen(params),
      ...this.staticLogicalPages.map(page => page.isOpen(params)),
    ];
    return helper.promise.allTrue(isOpenArr);
  }

  async verifyPageIsOpen(params: isOpenInterface = {timeout: 30 * 1000}) {
    if (!await this.pageIsOpen(params)) {
      throw new Error(`Physical "${this.page.page.name}" page didn't get opened`);
    }
  }

}


export {BaseService};
