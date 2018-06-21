import {TransactionsPa} from "../page_actions/Transactions.pa";


interface TransactionsServiceInterface {
  openFilters: () => Promise<void>;
}


class TransactionsService implements TransactionsServiceInterface {

  constructor(public page: TransactionsPa) {
  }


  async openFilters() {
    await this.page.clickFiltersButton();
  }

}


export {TransactionsService};
