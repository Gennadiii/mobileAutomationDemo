import {TransactionsPa} from "../../page_actions/transactions/transactions.pa";
import {BaseService} from "../base.service";
import {CommonPa} from "../../page_actions/common.pa";
import {FiltersService} from "./filters.service";


interface TransactionsServiceInterface {
  count: () => Promise<number>;
}


class TransactionsService extends BaseService implements TransactionsServiceInterface {

  constructor(public filters: FiltersService,
              public page: TransactionsPa,
              private commonPage: CommonPa) {
    super();
  }


  count() {
    return this.page.countTransactions(this.commonPage.waitUntilProgressBarDisappears.bind(this.commonPage));
  }

}


export {TransactionsService};
