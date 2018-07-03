import {LatestTransactionsService} from "./latestTransactions.service";
import {BalanceSectionService} from "./balanceSection.service";
import {HomePa} from "../../page_actions/home/home.pa";
import {SingleBalanceService} from "./singleBalance.service";


interface HomeServiceInterface {
}


class HomeService implements HomeServiceInterface {

  constructor(public balanceSection: BalanceSectionService,
              public latestTransactions: LatestTransactionsService,
              public singleBalance: SingleBalanceService,
              public page: HomePa) {
    this.page.setPages([
      this.latestTransactions.page,
      this.page
    ]);
  }


}


export {HomeService};
