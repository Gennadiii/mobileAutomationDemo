import {BasePa} from "../base.pa";
import {helper} from "../../../../helpers/helper";
import {BalanceSectionPo} from "../../page_objects/home/balanceSection.po";


const log = helper.logger.get('HomeBSPa');


interface BalanceSectionPaInterface extends BasePa {
  // actions
  expand: () => Promise<void>;
  // get
  countMain: () => Promise<number>;
  countAll: () => Promise<number>;
  // check
  areSomeBalancesHidden: () => Promise<boolean>;
  isMoreButtonDisplayed: () => Promise<boolean>;
  isCurrencyDisplayed: () => Promise<boolean>;
  isAmountDisplayed: () => Promise<boolean>;
  isCardNumberDisplayed: () => Promise<boolean>;
  isDisabledBalanceIconDisplayed: () => Promise<boolean>;
}


class BalanceSectionPa extends BasePa implements BalanceSectionPaInterface {

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

  isCurrencyDisplayed() {
    log.info(`Checking if currency is displayed`);
    return this.page.currencies.getElementByIndex(0).isDisplayed();
  }

  isAmountDisplayed() {
    log.info(`Checking if amount is displayed`);
    return this.page.amounts.getElementByIndex(0).isDisplayed();
  }

  isCardNumberDisplayed() {
    log.info(`Checking if card number is displayed`);
    return this.page.cards.getElementByIndex(0).isDisplayed();
  }

  isDisabledBalanceIconDisplayed() {
    log.info(`Check if amount is displayed`);
    return this.page.disabledBalanceIcons.getElementByIndex(0).isDisplayed();
  }

}


export {BalanceSectionPa};
