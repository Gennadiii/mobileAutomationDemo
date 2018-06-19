import {LatestTransactionsService} from "./latestTransactions.service";
import {BasePagePa} from "../../page_actions/basePage.pa";
import {BalanceSectionService} from "./balanceSection.service";


interface HomeServiceInterface {
  balanceSection: BalanceSectionService;
  latestTransactions: LatestTransactionsService;
}


class HomeService implements HomeServiceInterface {

  page = new BasePagePa();

  constructor(public balanceSection: BalanceSectionService,
              public latestTransactions: LatestTransactionsService) {
    this.page.setPages([this.balanceSection.page, this.latestTransactions.page]);
  }


}


export {HomeService};
