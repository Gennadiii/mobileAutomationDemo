import {helper} from "../../../../helpers/helper";
import {LatestTransactionsPa} from "../../page_actions/home/latestTransactions.pa";


const log = helper.logger.get(`HomeLTService`);


interface LatestTransactionsServiceInterface {
}


class LatestTransactionsService implements LatestTransactionsServiceInterface {

  constructor(public page: LatestTransactionsPa) {
  }


}


export {LatestTransactionsService};
