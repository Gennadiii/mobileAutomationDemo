import {LatestTransactionsService} from "./latestTransactions.service";
import {BalanceSectionService} from "./balanceSection.service";
import {HomePa} from "../../page_actions/home/home.pa";
import {SingleBalanceService} from "./singleBalance.service";
import {BaseService} from "../base.service";
import {helper} from "../../../../helpers/helper";


const log = helper.logger.get('HomeService');


interface HomeServiceInterface {
  sectionIsNotDisplayed: () => Promise<boolean>;
}


class HomeService extends BaseService implements HomeServiceInterface {

  protected staticLogicalPages = [this.latestTransactions.page];


  constructor(public balanceSection: BalanceSectionService,
              public latestTransactions: LatestTransactionsService,
              public singleBalance: SingleBalanceService,
              public page: HomePa) {
    super();
  }


  sectionIsNotDisplayed() {
    log.info(`Checking if balance section is displayed`);
    return helper.promise.allFalse([
      this.balanceSection.page.sectionIsDisplayed(),
      this.singleBalance.page.sectionIsDisplayed(),
    ]);
  }

}


export {HomeService};
