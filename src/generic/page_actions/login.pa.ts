import {LoginPo} from "../page_objects/login.po";
import {helper} from "../../helpers/helper";
import {BasePagePa} from "./basePage.pa";


const log = helper.logger.get('LoginPa');


interface LoginPaInterface extends BasePagePa {
  enterLogin: (login: string) => Promise<void>;
  enterPassword: (password: string) => Promise<void>;
  signIn: () => Promise<void>;
}


class LoginPa extends BasePagePa implements LoginPaInterface {

  constructor(public page: LoginPo) {
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


export {LoginPa};
