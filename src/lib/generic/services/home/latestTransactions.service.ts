import {helper} from "../../../../helpers/helper";
import {LatestTransactionsPa} from "../../page_actions/home/latestTransactions/latestTransactions.pa";
import {BaseService} from "../base.service";


const log = helper.logger.get(`HomeLTService`);


interface LatestTransactionsServiceInterface {
  count: () => Promise<number>;
}


class LatestTransactionsService extends BaseService implements LatestTransactionsServiceInterface {

  constructor(public page: LatestTransactionsPa) {
    super();
  }


  // get
  count() {
    log.info(`Counting transactions`);
    return this.page.countTransactions();
  }


}


export {LatestTransactionsService};
