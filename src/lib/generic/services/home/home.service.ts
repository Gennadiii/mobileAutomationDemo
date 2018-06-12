import {BalanceService} from "./balance.service";
import {LatestTransactionsService} from "./latestTransactions.service";
import {BasePagePa} from "../../page_actions/basePage.pa";


interface HomeServiceInterface {
  balance: BalanceService;
  latestTransactions: LatestTransactionsService;
}


class HomeService implements HomeServiceInterface {

  page = new BasePagePa();

  constructor(public balance: BalanceService,
              public latestTransactions: LatestTransactionsService) {
    this.page.setPages([this.balance.page, this.latestTransactions.page]);
  }


}


export {HomeService};
