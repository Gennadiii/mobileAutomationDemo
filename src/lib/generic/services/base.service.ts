import {helper} from "../../../helpers/helper";


interface BaseServiceInterface {
  pageIsOpen: () => Promise<boolean>;
  verifyPageIsOpen: () => Promise<void>;
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

  async pageIsOpen() {
    this.page && log.info(`Checking if physical "${this.page.page.name}" page is open`);
    let result = true;
    if (this.page) {
      result = result && this.page.isOpen();
    }
    /* tslint:disable-next-line */ // replace with "for await of" after moving to node 10
    for (let j = 0; j < this.staticLogicalPages.length; j++) {
      result = result && await this.staticLogicalPages[j].isOpen();
    }
    return result;
  }

  async verifyPageIsOpen() {
    if (!await this.pageIsOpen()) {
      throw new Error(`Physical "${this.page && this.page.page.name}" page didn't get opened`);
    }
  }

}


export {BaseService};
