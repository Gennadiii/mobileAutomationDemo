import {helper} from "../../../../helpers/helper";
import {ViewBalancePa} from "../../page_actions/home/balanceSection/viewBalance.pa";
import {BaseService} from "../base.service";
import {CardPa} from "../../page_actions/home/balanceSection/card.pa";
import {LatestTransactionsPa} from "../../page_actions/home/latestTransactions/latestTransactions.pa";


const log = helper.logger.get(`HomeVBService`);


interface ViewBalanceServiceInterface {
  isWithCard: () => Promise<boolean>;
}


class ViewBalanceService extends BaseService implements ViewBalanceServiceInterface {

  staticLogicalPages = [this.latestTransactionsPage];

  constructor(public page: ViewBalancePa,
              public cardPage: CardPa,
              public latestTransactionsPage: LatestTransactionsPa) {
    super();
  }


  // check
  isWithCard() {
    log.info(`Checking if balance view contains card`);
    return this.cardPage.titleIsDisplayed();
  }

}


export {ViewBalanceService};
