import {helper} from "../../../../helpers/helper";
import {BalanceSectionPa} from "../../page_actions/home/balanceSection.pa";
import {BaseService} from "../base.service";
import {ViewBalanceService} from "./viewBalance.service";


const log = helper.logger.get(`HomeBSService`);


interface BalanceSectionServiceInterface {
  // actions
  openBalanceWithVisibleCard: () => Promise<void>;
}


class BalanceSectionService extends BaseService implements BalanceSectionServiceInterface {

  constructor(private viewBalanceService: ViewBalanceService,
              public page: BalanceSectionPa) {
    super();
  }


  // actions
  async openBalanceWithVisibleCard() {
    log.info(`Opening balance with visible card`);
    const card = await this.page.getCardByIndex(0);
    await card.click();
    await this.viewBalanceService.verifyPageIsOpen();
  }

}


export {BalanceSectionService};
