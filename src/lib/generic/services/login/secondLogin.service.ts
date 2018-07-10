import {userInterface} from "../user.service";
import {helper} from "../../../../helpers/helper";
import {SecondLoginPa} from "../../page_actions/login/secondLogin.pa";
import {FingerprintService} from "./fingerprint.service";
import {LanguagePa} from "../../page_actions/language.pa";
import {HomeService} from "../home/home.service";
import {BaseService} from "../base.service";


const log = helper.logger.get('SecondLoginService');


interface SecondLoginServiceInterface {
  as: (user: userInterface) => Promise<void>;
}


class SecondLoginService extends BaseService implements SecondLoginServiceInterface {

  constructor(private homeService: HomeService,
              public fingerprint: FingerprintService,
              public page: SecondLoginPa,
              public languagePage: LanguagePa) {
    super();
  }


  async as(user: userInterface, params = {skipFingerprint: true}) {
    const {skipFingerprint} = params;
    log.info(`Logging in back`);
    const {password} = user;
    await this.page.enterPassword(password);
    await this.page.clickSignInButton();

    if (skipFingerprint) {
      await this.fingerprint.verifyPageIsOpen();
      await this.fingerprint.skip();
    }
    await this.homeService.verifyPageIsOpen();
  }

}


export {SecondLoginService};
