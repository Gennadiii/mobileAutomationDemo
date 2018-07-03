import {BasePagePa} from "../basePage.pa";
import {helper} from "../../../../helpers/helper";
import {SingleBalancePo} from "../../page_objects/home/SingleBalance.po";


const log = helper.logger.get('HomeSBPa');


interface SingleBalancePaInterface extends BasePagePa {
  balanceContentIsDisplayed: () => Promise<boolean>;
  cardContentIsNotDisplayed: () => Promise<boolean>;
}


class SingleBalancePa extends BasePagePa implements SingleBalancePaInterface {

  constructor(public page: SingleBalancePo) {
    super();
  }


  balanceContentIsDisplayed() {
    log.info(`Checking if balance content is displayed`);
    const isDisplayedArr = this.page.balanceElements
      .map(element => element.isDisplayed());
    return helper.promise.allTrue({arr: isDisplayedArr});
  }

  cardContentIsNotDisplayed() {
    log.info(`Checking if card content is not displayed`);
    const isNotDisplayedArr = this.page.cardElements
      .map(element => element.isDisplayed());
    return helper.promise.allFalse({arr: isNotDisplayedArr});
  }

}


export {SingleBalancePa};
