import {helper} from "../../../../helpers/helper";
import {BasePagePa} from "../basePage.pa";
import {BaseLoginPo} from "../../page_objects/login/baseLogin.po";


const log = helper.logger.get('BaseLoginPa');


interface BaseLoginPaInterface extends BasePagePa {
  enterPassword: (password: string) => Promise<void>;
  clickSignInButton: () => Promise<void>;
}


class BaseLoginPa extends BasePagePa implements BaseLoginPaInterface {

  constructor(public page: BaseLoginPo) {
    super();
  }


  async enterPassword(password) {
    log.info(`Entering password: ${password}`);
    await this.page.passwordField.sendKeys(password);
  }

  async clickSignInButton() {
    log.info(`Signing in`);
    await this.page.signInButton.click();
  }

}


export {BaseLoginPa};
