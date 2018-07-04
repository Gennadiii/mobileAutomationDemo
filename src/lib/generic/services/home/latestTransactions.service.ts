import {helper} from "../../../../helpers/helper";
import {LatestTransactionsPa} from "../../page_actions/home/latestTransactions.pa";


const log = helper.logger.get(`HomeLTService`);


interface LatestTransactionsServiceInterface {
  count: () => Promise<number>;
}


class LatestTransactionsService implements LatestTransactionsServiceInterface {

  constructor(public page: LatestTransactionsPa) {
  }


  // get
  count() {
    return this.page.countTransactions();
  }


}


export {LatestTransactionsService};
