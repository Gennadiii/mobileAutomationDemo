import {TransactionsPa} from "../page_actions/Transactions.pa";
import {BaseService} from "./base.service";


interface TransactionsServiceInterface {
  openFilters: () => Promise<void>;
}


class TransactionsService extends BaseService implements TransactionsServiceInterface {

  constructor(public page: TransactionsPa) {
    super();
  }


  async openFilters() {
    await this.page.clickFiltersButton();
  }

}


export {TransactionsService};
