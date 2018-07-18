import {CommonPo} from "../page_objects/Common.po";
import {helper} from "../../../helpers/helper";
import {BasePa} from "./base.pa";


const log = helper.logger.get('CommonPa');


interface CommonPaInterface extends BasePa {
  // action
  clickBackButton: () => Promise<void>;
  // check
  isErrorMessageDisplayed: () => Promise<boolean>;
  // wait
  waitUntilProgressBarDisappears: () => Promise<boolean>;
}


class CommonPa extends BasePa implements CommonPaInterface {

  constructor(public page: CommonPo) {
    super();
  }


  // action
  async clickBackButton() {
    log.info(`Clicking back button`);
    await this.page.backButton.click();
  }

  // check
  isErrorMessageDisplayed() {
    log.info(`Checking if error message is displayed`);
    return this.page.errorMessage.isDisplayed();
  }

  // wait
  waitUntilProgressBarDisappears() {
    log.info(`Waiting until progress bar disappears`);
    return this.page.progressBar.waitUntilDisappear(1000);
  }

}


export {CommonPa};
