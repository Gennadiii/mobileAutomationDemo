import {helper} from "../../../../helpers/helper";
import {BasePagePa} from "../basePage.pa";
import {FirstLoginPo} from "../../page_objects/login/firstLogin.po";


const log = helper.logger.get('FirstLoginPa');


interface FirstLoginPaInterface extends BasePagePa {
  enterLogin: (login: string) => Promise<void>;
  enterPassword: (password: string) => Promise<void>;
  signIn: () => Promise<void>;
}


class FirstLoginPa extends BasePagePa implements FirstLoginPaInterface {

  constructor(public page: FirstLoginPo) {
    super();
  }

  async enterLogin(login) {
    log.info(`Entering login: ${login}`);
    await this.page.loginField.sendKeys(login);
  }

  async enterPassword(password) {
    log.info(`Entering password: ${password}`);
    await this.page.passwordField.sendKeys(password);
  }

  async signIn() {
    log.info(`Signing in`);
    await this.page.signInButton.click();
  }

}


export {FirstLoginPa};
