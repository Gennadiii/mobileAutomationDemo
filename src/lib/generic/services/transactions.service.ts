import {TransactionsPa} from "../page_actions/Transactions.pa";
import {BaseService} from "./base.service";
import {CommonPa} from "../page_actions/common.pa";


interface TransactionsServiceInterface {
  openFilters: () => Promise<void>;
}


class TransactionsService extends BaseService implements TransactionsServiceInterface {

  constructor(public page: TransactionsPa,
              private commonPage: CommonPa) {
    super();
  }


  async openFilters() {
    await this.page.clickFiltersButton();
  }

  countTransactions() {
    return this.page.countTransactions(this.commonPage.waitUntilProgressBarDisappears.bind(this.commonPage));
  }

}


export {TransactionsService};
