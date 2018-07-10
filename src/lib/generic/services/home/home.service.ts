import {LatestTransactionsService} from "./latestTransactions.service";
import {BalanceSectionService} from "./balanceSection.service";
import {HomePa} from "../../page_actions/home/home.pa";
import {SingleBalanceService} from "./singleBalance.service";
import {BaseService} from "../base.service";


interface HomeServiceInterface {
}


class HomeService extends BaseService implements HomeServiceInterface {

  protected staticLogicalPages = [this.latestTransactions.page];


  constructor(public balanceSection: BalanceSectionService,
              public latestTransactions: LatestTransactionsService,
              public singleBalance: SingleBalanceService,
              public page: HomePa) {
    super();
  }

}


export {HomeService};
