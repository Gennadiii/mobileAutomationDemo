import {BasePagePa} from "../basePage.pa";
import {helper} from "../../../../helpers/helper";
import {LatestTransactionsPo} from "../../page_objects/home/latestTransactions.po";


const log = helper.logger.get('HomeLTPa');


interface LatestTransactionsPaInterface extends BasePagePa {
}


class LatestTransactionsPa extends BasePagePa implements LatestTransactionsPaInterface {

  constructor(public page: LatestTransactionsPo) {
    super();
  }

}


export {LatestTransactionsPa};
