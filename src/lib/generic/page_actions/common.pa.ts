import {CommonPo} from "../page_objects/Common.po";
import {helper} from "../../../helpers/helper";
import {BasePa} from "./base.pa";


const log = helper.logger.get('CommonPa');


interface CommonPaInterface extends BasePa {
  // check
  isErrorMessageDisplayed: () => Promise<boolean>;
  // wait
  waitUntilProgressBarDisappears: () => Promise<boolean>;
}


class CommonPa extends BasePa implements CommonPaInterface {

  constructor(public page: CommonPo) {
    super();
  }


  isErrorMessageDisplayed() {
    log.info(`Checking if error message is displayed`);
    return this.page.errorMessage.isDisplayed();
  }

  waitUntilProgressBarDisappears() {
    log.info(`Waiting until progress bar disappears`);
    return this.page.progressBar.waitUntilDisappear(1000);
  }

}


export {CommonPa};
