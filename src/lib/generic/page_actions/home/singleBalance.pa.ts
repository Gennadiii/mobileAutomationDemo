import {BasePa} from "../base.pa";
import {helper} from "../../../../helpers/helper";
import {SingleBalancePo} from "../../page_objects/home/SingleBalance.po";


const log = helper.logger.get('HomeSBPa');


interface SingleBalancePaInterface extends BasePa {
  // check
  balanceContentIsDisplayed: () => Promise<boolean>;
  cardContentIsNotDisplayed: () => Promise<boolean>;
  sectionIsDisplayed: () => Promise<boolean>;
}


class SingleBalancePa extends BasePa implements SingleBalancePaInterface {

  constructor(public page: SingleBalancePo) {
    super();
  }


  // check
  balanceContentIsDisplayed() {
    log.info(`Checking if balance content is displayed`);
    const isDisplayedArr = this.page.balanceElements
      .map(element => element.isDisplayed());
    return helper.promise.allTrue(isDisplayedArr);
  }

  cardContentIsNotDisplayed() {
    log.info(`Checking if card content is not displayed`);
    const isNotDisplayedArr = this.page.cardElements
      .map(element => element.isDisplayed());
    return helper.promise.allFalse(isNotDisplayedArr);
  }

  sectionIsDisplayed() {
    log.info(`Checking if balance section is displayed`);
    return this.page.section.isDisplayed();
  }

}


export {SingleBalancePa};
