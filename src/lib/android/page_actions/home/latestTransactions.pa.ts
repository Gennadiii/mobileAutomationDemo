import {helper} from "../../../../helpers/helper";
import {
  LatestTransactionsPa as GenericLatestTransactionsPa
} from "../../../generic/page_actions/home/latestTransactions.pa";
import {LatestTransactionsPo} from "../../../generic/page_objects/home/latestTransactions.po";


const log = helper.logger.get('AndroidHomeLTPa');


interface LatestTransactionsPaInterface extends GenericLatestTransactionsPa {
}


class LatestTransactionsPa extends GenericLatestTransactionsPa implements LatestTransactionsPaInterface {

  constructor(public page: LatestTransactionsPo) {
    super(page);
  }


  // get
  countTransactions() {
    log.info(`Counting transactions`);
    return this.page.items.length();
  }

}


export {LatestTransactionsPa};