import {BasePagePa} from "./basePage.pa";
import {HomePo} from "../page_objects/home.po";
import {helper} from "../../../helpers/helper";
import {latestTransactionInterface} from "../services/home.service";


const log = helper.logger.get('HomePa');


interface HomePaInterface extends BasePagePa {
  // BALANCES
  // actions
  openAllBalances: () => Promise<void>;
  // get
  countMainBalances: () => Promise<number>;
  countHiddenBalances: () => Promise<number>;
  // check
  areSomeBalancesHidden: () => Promise<boolean>;

  // LATEST TRANSACTIONS
  // get
  getLatestTransactionAmount: () => Promise<string>;
}


class HomePa extends BasePagePa implements HomePaInterface {

  constructor(public page: HomePo) {
    super();
  }

  // BALANCES
  // actions
  async openAllBalances() {
    log.info(`Opening all balances`);
    await this.page.moreBalancesButton.click();
  }

  // get
  countMainBalances() {
    log.info(`Counting main balances`);
    return this.page.mainBalancesList.getCount({withScroll: false});
  }

  countHiddenBalances() {
    log.info(`Counting hidden balances`);
    return this.page.hiddenBalancesList.getCount();
  }

  // check
  async areSomeBalancesHidden() {
    log.info(`Checking if some balances are hidden`);
    return await this.page.moreBalancesButton.isDisplayed();
  }

  // LATEST TRANSACTIONS
  // get
  getLatestTransactionAmount() {
    log.info(`Getting latest transaction amount`);
    return this.page.latestTransactionAmount.getText();
  }

}


export {HomePa};
