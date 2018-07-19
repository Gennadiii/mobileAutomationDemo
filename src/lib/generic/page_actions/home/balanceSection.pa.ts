import {BasePa} from "../base.pa";
import {helper} from "../../../../helpers/helper";
import {BalanceSectionPo} from "../../page_objects/home/balanceSection.po";
import {Section} from "../../components/section";
import {Label} from "../../components/label";


const log = helper.logger.get('HomeBSPa');


interface BalanceSectionPaInterface extends BasePa {
  // actions
  expand: () => Promise<void>;
  openBalance: (index: number) => Promise<void>;
  // get
  countMain: () => Promise<number>;
  countAll: () => Promise<number>;
  getBalanceByIndex: (index: number) => Promise<Section>;
  getCardByIndex: (index: number) => Promise<Label>;
  // check
  areSomeBalancesHidden: () => Promise<boolean>;
  isMoreButtonDisplayed: () => Promise<boolean>;
  isCurrencyDisplayed: () => Promise<boolean>;
  isAmountDisplayed: () => Promise<boolean>;
  isCardNumberDisplayed: () => Promise<boolean>;
  isDisabledBalanceIconDisplayed: () => Promise<boolean>;
  sectionIsDisplayed: () => Promise<boolean>;
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

  async openBalance(index) {
    log.info(`Opening balance "${index + 1}"`);
    const balance = await this.getBalanceByIndex(index);
    await balance.click();
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

  getBalanceByIndex(index: number) {
    return this.getBalanceElementByIndex(index, 'balance', this.page.items);
  }

  getCardByIndex(index: number) {
    return this.getBalanceElementByIndex(index, 'card', this.page.cards);
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

  sectionIsDisplayed() {
    log.info(`Checking if balance section is displayed`);
    return this.page.items.getElementByIndex(0).isDisplayed();
  }

  private async getBalanceElementByIndex(index: number, elementName: string, componentsList) {
    log.info(`Getting ${elementName} by index "${index + 1}"`);
    const element = componentsList.getElementByIndex(index);
    if (!await element.isDisplayed()) {
      throw new Error(`${elementName} is not found`);
    }
    return element;
  }

}


export {BalanceSectionPa};
