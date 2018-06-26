import {BasePagePa} from "../basePage.pa";
import {helper} from "../../../../helpers/helper";
import {BalanceSectionPo} from "../../page_objects/home/balanceSection.po";


const log = helper.logger.get('HomeBSPa');


interface BalanceSectionPaInterface extends BasePagePa {
  // actions
  expand: () => Promise<void>;
  // get
  countMain: () => Promise<number>;
  countAll: () => Promise<number>;
  // check
  areSomeBalancesHidden: () => Promise<boolean>;
  isMoreButtonDisplayed: () => Promise<boolean>;
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
  async countMain() {
    log.info(`Counting main balances`);
    return await this.page.items.length({withScroll: false});
  }

  async countAll() {
    log.info(`Counting all balances`);
    return await this.page.items.length({withScroll: true});
  }

  // check
  areSomeBalancesHidden() {
    log.info(`Checking if some balances are hidden`);
    return this.page.moreButton.isDisplayed();
  }

  isMoreButtonDisplayed() {
    log.info(`Checking if More button is displayed`);
    return this.page.moreButton.isDisplayed();
  }

}


export {BalanceSectionPa};
