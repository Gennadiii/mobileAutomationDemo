import {helper} from "../../../../helpers/helper";
import {FingerprintPa} from "../../page_actions/login/Fingerprint.pa";


const log = helper.logger.get('FingerprintService');


interface FingerprintServiceInterface {
  skip: () => Promise<void>;
}


class FingerprintService implements FingerprintServiceInterface {

  constructor(public page: FingerprintPa) {
  }


  async skip() {
    log.info(`Skipping fingerprint setup`);
    await this.page.clickNotNowButton();
  }

}


export {FingerprintService};
