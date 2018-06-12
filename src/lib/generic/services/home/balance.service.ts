import {helper} from "../../../../helpers/helper";
import {BalancePa} from "../../page_actions/home/balance.pa";


const log = helper.logger.get(`BalanceService`);


interface BalanceServiceInterface {
  // get
  count: () => Promise<number>;
}


class BalanceService implements BalanceServiceInterface {

  constructor(public page: BalancePa) {
  }

  // get
  async count() {
    log.info(`Counting balances`);
    const mainBalances = await this.page.countMain();
    await this.page.areSomeBalancesHidden() && await this.page.openHidden();
    const hiddenBalances = await this.page.countHidden();
    return mainBalances + hiddenBalances;
  }

}


export {BalanceService};
