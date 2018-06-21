import {BasePagePa} from "../basePage.pa";
import {helper} from "../../../../helpers/helper";
import {BalanceSectionPo} from "../../page_objects/home/balanceSection.po";


const log = helper.logger.get('HomeBSPa');


interface BalanceSectionPaInterface extends BasePagePa {
  // actions
  expand: () => Promise<void>;
  // get
  // count: () => Promise<number>;
  // check
  areSomeBalancesHidden: () => Promise<boolean>;
}


class BalanceSectionPa extends BasePagePa implements BalanceSectionPaInterface {

  constructor(public page: BalanceSectionPo) {
    super();
  }

  // actions
  async expand() {
    log.info(`Expanding balances`);
    await this.page.moreButton.click();
  }

  // get
  count() {
    log.info(`Counting main balances`);
  }

  // check
  async areSomeBalancesHidden() {
    log.info(`Checking if some balances are hidden`);
    return await this.page.moreButton.isDisplayed();
  }

}


export {BalanceSectionPa};
