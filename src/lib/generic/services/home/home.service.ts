import {LatestTransactionsService} from "./latestTransactions.service";
import {BalanceSectionService} from "./balanceSection.service";
import {HomePa} from "../../page_actions/home/home.pa";
import {SingleBalanceService} from "./singleBalance.service";
import {BaseService} from "../base.service";
import {helper} from "../../../../helpers/helper";
import {ViewBalanceService} from "./viewBalance.service";
import {driver} from "../../../../../index";
import {CommonPa} from "../../page_actions/common.pa";


const log = helper.logger.get('HomeService');


interface HomeServiceInterface {
  // action
  findBalanceWithCard: () => Promise<void>;
  // check
  balanceSectionIsNotDisplayed: (params: findBalanceWithCardInterface) => Promise<boolean>;
}


class HomeService extends BaseService implements HomeServiceInterface {

  protected staticLogicalPages = [this.latestTransactions.page];


  constructor(public balanceSection: BalanceSectionService,
              public latestTransactions: LatestTransactionsService,
              public singleBalance: SingleBalanceService,
              public viewBalance: ViewBalanceService,
              public page: HomePa,
              private commonPage: CommonPa) {
    super();
  }


  // action
  async findBalanceWithCard(params: findBalanceWithCardInterface = {includeHiddenBalances: false}) {
    log.info(`Looking for balance with card`);
    const {includeHiddenBalances} = params;
    let indexCounter = 0;
    includeHiddenBalances && this.balanceSection.page.expand();
    while (indexCounter < 5) {
      await this.balanceSection.page.openBalance(indexCounter++);
      if (await this.viewBalance.cardPage.isOpen({timeout: 200})) {
        return;
      }
      // await this.commonPage.clickBackButton();
      await driver.appium.pressKeycode(4); // todo replace with above after adding locators for app back button
    }
    throw new Error(`User has too many balances. Please consider other users`);
  }

  // check
  balanceSectionIsNotDisplayed() {
    log.info(`Checking if balance section is displayed`);
    return helper.promise.allFalse([
      this.balanceSection.page.sectionIsDisplayed(),
      this.singleBalance.page.sectionIsDisplayed(),
    ]);
  }

}


export {HomeService};


interface findBalanceWithCardInterface {
  includeHiddenBalances: boolean;
}

