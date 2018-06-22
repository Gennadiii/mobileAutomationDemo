import {LatestTransactionsService} from "./latestTransactions.service";
import {BalanceSectionService} from "./balanceSection.service";
import {HomePa} from "../../page_actions/home/home.pa";


interface HomeServiceInterface {
}


class HomeService implements HomeServiceInterface {

  constructor(public balanceSection: BalanceSectionService,
              public latestTransactions: LatestTransactionsService,
              public page: HomePa) {
    this.page.setPages([
      this.balanceSection.page,
      this.latestTransactions.page,
      this.page
    ]);
  }


}


export {HomeService};
