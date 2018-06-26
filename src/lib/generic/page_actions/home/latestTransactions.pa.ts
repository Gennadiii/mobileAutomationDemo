import {BasePagePa} from "../basePage.pa";
import {helper} from "../../../../helpers/helper";
import {LatestTransactionsPo} from "../../page_objects/home/latestTransactions.po";


const log = helper.logger.get('HomeLTPa');


interface LatestTransactionsPaInterface extends BasePagePa {
  // check
  latestAmountIsDisplayed: () => Promise<boolean>;
}


class LatestTransactionsPa extends BasePagePa implements LatestTransactionsPaInterface {

  constructor(public page: LatestTransactionsPo) {
    super();
  }

  // check
  latestAmountIsDisplayed() {
    log.info(`Checking if latest amount is displayed`);
    return this.page.latestAmount.isDisplayed();
  }

}


export {LatestTransactionsPa};
