import {BasePagePa} from "../basePage.pa";
import {helper} from "../../../../helpers/helper";
import {LatestTransactionsPo} from "../../page_objects/home/latestTransactions.po";


const log = helper.logger.get('HomeLTPa');


interface LatestTransactionsPaInterface extends BasePagePa {
  // actions
  clickAllTransactionsLink: () => Promise<void>;
  // check
  emptyTransactionsContentIsDisplayed: () => Promise<boolean>;
  latestIsDisplayed: () => Promise<boolean>;
  findAllTransactionsLink: () => Promise<boolean>;
  // get
  countTransactions: () => Promise<number>;
}


class LatestTransactionsPa extends BasePagePa implements LatestTransactionsPaInterface {

  constructor(public page: LatestTransactionsPo) {
    super();
  }


  // actions
  async clickAllTransactionsLink() {
    log.info(`Clicking all transactions link`);
    await this.page.allTransactionsLink.click();
  }

  // check
  emptyTransactionsContentIsDisplayed() {
    log.info(`Checking if empty transactions content is displayed`);
    const isDisplayedArr = this.page.emptyTransactionsContent
      .map(element => element.isDisplayed());
    return helper.promise.allTrue({arr: isDisplayedArr});
  }

  latestIsDisplayed() {
    log.info(`Checking if latest transaction is displayed`);
    return this.page.items.getElementByIndex(0).isDisplayed();
  }

  findAllTransactionsLink() {
    log.info(`Looking for all transactions link`);
    return this.page.allTransactionsLink.scrollUntilDisplayed({maxScrolls: 6});
  }

  // get
  countTransactions() {
    log.info(`Counting transactions`);
    return this.page.items.length();
  }

}


export {LatestTransactionsPa};
