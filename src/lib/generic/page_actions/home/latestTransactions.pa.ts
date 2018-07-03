import {BasePagePa} from "../basePage.pa";
import {helper} from "../../../../helpers/helper";
import {LatestTransactionsPo} from "../../page_objects/home/latestTransactions.po";


const log = helper.logger.get('HomeLTPa');


interface LatestTransactionsPaInterface extends BasePagePa {
  // actions
  clickAllTransactionsLink: () => Promise<void>;
  // check
  latestDateIsDisplayed: () => Promise<boolean>;
  latestDescriptionIsDisplayed: () => Promise<boolean>;
  latestCurrencyIsDisplayed: () => Promise<boolean>;
  latestAmountIsDisplayed: () => Promise<boolean>;
  latestStatusIsDisplayed: () => Promise<boolean>;
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
  latestDateIsDisplayed() {
    log.info(`Checking if latest date is displayed`);
    return this.page.dates.getElementByIndex(0).isDisplayed();
  }

  latestDescriptionIsDisplayed() {
    log.info(`Checking if latest description is displayed`);
    return this.page.descriptions.getElementByIndex(0).isDisplayed();
  }

  latestCurrencyIsDisplayed() {
    log.info(`Checking if latest currency is displayed`);
    return this.page.currencies.getElementByIndex(0).isDisplayed();
  }

  latestAmountIsDisplayed() {
    log.info(`Checking if latest amount is displayed`);
    return this.page.amounts.getElementByIndex(0).isDisplayed();
  }

  latestStatusIsDisplayed() {
    log.info(`Checking if latest status is displayed`);
    return this.page.statuses.getElementByIndex(0).isDisplayed();
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
