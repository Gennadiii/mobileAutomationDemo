import {helper} from "../../../../helpers/helper";
import {
  LatestTransactionsPa as GenericLatestTransactionsPa
} from "../../../generic/page_actions/home/latestTransactions/latestTransactions.pa";
import {LatestTransactionsPo} from "../../../generic/page_objects/home/latestTransactions/latestTransactions.po";


const log = helper.logger.get('IosHomeLTPa');


interface LatestTransactionsPaInterface extends GenericLatestTransactionsPa {
}


class LatestTransactionsPa extends GenericLatestTransactionsPa implements LatestTransactionsPaInterface {

  constructor(public page: LatestTransactionsPo) {
    super(page);
  }


  // get
  countTransactions() {
    log.info(`Counting transactions`);
    return this.page.items.length({withScroll: false});
  }

}


export {LatestTransactionsPa};
