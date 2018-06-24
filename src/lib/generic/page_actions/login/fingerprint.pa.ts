import {FingerprintPo} from "../../page_objects/login/Fingerprint.po";
import {BasePagePa} from "../basePage.pa";
import {helper} from "../../../../helpers/helper";


const log = helper.logger.get('FingerprintPa');


interface FingerprintPaInterface extends BasePagePa {
  clickNotNowButton: () => Promise<any>;
}


class FingerprintPa extends BasePagePa implements FingerprintPaInterface {

  constructor(public page: FingerprintPo) {
    super();
  }


  async clickNotNowButton() {
    log.info(`Clicking not now button`);
    await this.page.notNowButton.click();
  }

}


export {FingerprintPa};
