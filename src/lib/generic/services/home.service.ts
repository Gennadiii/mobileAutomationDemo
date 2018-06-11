import {HomePa} from "../page_actions/home.pa";
import {helper} from "../../../helpers/helper";


const log = helper.logger.get(`HomeService`);


interface HomeServiceInterface {
  // BALANCE
  // get
  getBalancesCount: () => Promise<number>;
  // LATEST TRANSACTIONS
  // get
  getLatestTransaction: () => Promise<latestTransactionInterface>;
}


class HomeService implements HomeServiceInterface {

  constructor(public page: HomePa) {
  }

  // BALANCE
  // get
  async getBalancesCount() {
    log.info(`Counting balances`);
    const mainBalances = await this.page.countMainBalances();
    await this.page.areSomeBalancesHidden() && await this.page.openAllBalances();
    const hiddenBalances = await this.page.countHiddenBalances();
    return mainBalances + hiddenBalances;
  }

  // LATEST TRANSACTIONS
  // get
  async getLatestTransaction() {
    log.info(`Getting latest transaction`);
    const result = {} as latestTransactionInterface;
    result.amount = +await this.page.getLatestTransactionAmount();
    return result;
  }

}


export {HomeService, latestTransactionInterface};


interface latestTransactionInterface {
  amount: number;
}

