import {BasePagePa} from "../basePage.pa";
import {helper} from "../../../../helpers/helper";
import {LatestTransactionsPo} from "../../page_objects/home/latestTransactions.po";


const log = helper.logger.get('LatestTransactionsPa');


interface LatestTransactionsPaInterface extends BasePagePa {
  // get
  getLatestAmount: () => Promise<string>;
}


class LatestTransactionsPa extends BasePagePa implements LatestTransactionsPaInterface {

  constructor(public page: LatestTransactionsPo) {
    super();
  }

  // get
  getLatestAmount() {
    log.info(`Getting latest transaction amount`);
    return this.page.latestAmount.getText();
  }

}


export {LatestTransactionsPa};
