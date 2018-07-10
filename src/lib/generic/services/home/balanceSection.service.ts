import {helper} from "../../../../helpers/helper";
import {BalanceSectionPa} from "../../page_actions/home/balanceSection.pa";
import {BaseService} from "../base.service";


const log = helper.logger.get(`HomeBSService`);


interface BalanceSectionServiceInterface {
  // get
  // count: () => Promise<number>;
}


class BalanceSectionService extends BaseService implements BalanceSectionServiceInterface {

  constructor(public page: BalanceSectionPa) {
    super();
  }

  // get
  // async count() {
  //   log.info(`Counting balances`);
  //   const mainBalances = await this.page.countMain();
  //   await this.page.areSomeBalancesHidden() && await this.page.openHidden();
  //   const hiddenBalances = await this.page.countHidden();
  //   return mainBalances + hiddenBalances;
  // }

}


export {BalanceSectionService};
