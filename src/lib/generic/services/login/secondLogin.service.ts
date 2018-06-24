import {userInterface} from "../user.service";
import {helper} from "../../../../helpers/helper";
import {SecondLoginPa} from "../../page_actions/login/secondLogin.pa";
import {FingerprintService} from "./fingerprint.service";


const log = helper.logger.get('SecondLoginService');


interface SecondLoginServiceInterface {
  as: (user: userInterface) => Promise<void>;
}


class SecondLoginService implements SecondLoginServiceInterface {


  constructor(public fingerprint: FingerprintService,
              public page: SecondLoginPa) {
  }

  async as(user: userInterface, params = {skipFingerprint: true}) {
    const {skipFingerprint} = params;
    log.info(`Logging in back`);
    const {password} = user;
    await this.page.enterPassword(password);
    await this.page.clickSignInButton();
    await helper.dateTime.sleep(3000); // todo remove when locator for nor now button is added

    if (skipFingerprint) {
      await this.fingerprint.page.verifyIsOpen();
      await this.fingerprint.skip();
    }
  }

}


export {SecondLoginService};
