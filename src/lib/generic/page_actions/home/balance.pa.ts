import {BasePagePa} from "../basePage.pa";
import {helper} from "../../../../helpers/helper";
import {BalancePo} from "../../page_objects/home/balance.po";


const log = helper.logger.get('BalancePa');


interface BalancePaInterface extends BasePagePa {
  // actions
  openHidden: () => Promise<void>;
  // get
  countMain: () => Promise<number>;
  countHidden: () => Promise<number>;
  // check
  areSomeBalancesHidden: () => Promise<boolean>;
}


class BalancePa extends BasePagePa implements BalancePaInterface {

  constructor(public page: BalancePo) {
    super();
  }

  // actions
  async openHidden() {
    log.info(`Opening all balances`);
    await this.page.moreButton.click();
  }

  // get
  countMain() {
    log.info(`Counting main balances`);
    return this.page.mainList.getCount({withScroll: false});
  }

  countHidden() {
    log.info(`Counting hidden balances`);
    return this.page.hiddenList.getCount();
  }

  // check
  async areSomeBalancesHidden() {
    log.info(`Checking if some balances are hidden`);
    return await this.page.moreButton.isDisplayed();
  }

}


export {BalancePa};
