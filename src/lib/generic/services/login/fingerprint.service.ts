import {helper} from "../../../../helpers/helper";
import {FingerprintPa} from "../../page_actions/login/Fingerprint.pa";
import {BaseService} from "../base.service";


const log = helper.logger.get('FingerprintService');


interface FingerprintServiceInterface {
  skip: () => Promise<void>;
}


class FingerprintService extends BaseService implements FingerprintServiceInterface {

  constructor(public page: FingerprintPa) {
    super();
  }


  async skip() {
    log.info(`Skipping fingerprint setup`);
    await this.page.clickNotNowButton();
  }

}


export {FingerprintService};
