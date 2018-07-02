import {CommonPo} from "../page_objects/Common.po";
import {helper} from "../../../helpers/helper";
import {BasePagePa} from "./basePage.pa";


const log = helper.logger.get('CommonPa');


interface CommonPaInterface extends BasePagePa {
  // check
  isErrorMessageDisplayed: () => Promise<boolean>;
}


class CommonPa extends BasePagePa implements CommonPaInterface {

  constructor(public page: CommonPo) {
    super();
  }


  isErrorMessageDisplayed() {
    log.info(`Checking if error message is displayed`);
    return this.page.errorMessage.isDisplayed();
  }

}


export {CommonPa};
