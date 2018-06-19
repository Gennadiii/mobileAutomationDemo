import {helper} from "../../../../helpers/helper";
import {LatestTransactionsPa} from "../../page_actions/home/latestTransactions.pa";


const log = helper.logger.get(`HomeLTService`);


interface LatestTransactionsServiceInterface {
  // get
  getLatest: () => Promise<latestInterface>;
}


class LatestTransactionsService implements LatestTransactionsServiceInterface {

  constructor(public page: LatestTransactionsPa) {
  }

  // get
  async getLatest() {
    log.info(`Getting latest transaction`);
    const result = {} as latestInterface;
    result.amount = +await this.page.getLatestAmount();
    return result;
  }

}


export {LatestTransactionsService, latestInterface};


interface latestInterface {
  amount: number;
}
