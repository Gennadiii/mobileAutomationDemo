import {helper} from "../../../../helpers/helper";
import {FirstLoginPo} from "../../page_objects/login/firstLogin.po";
import {BaseLoginPa} from "./baseLogin.pa";


const log = helper.logger.get('FirstLoginPa');


interface FirstLoginPaInterface extends BaseLoginPa {
  // actions
  enterLogin: (login: string) => Promise<void>;
  enterPassword: (password: string) => Promise<void>;
  clearLogin: () => Promise<void>;
  clearPassword: () => Promise<void>;
  // checks
  loginValidationIsDisplayed: () => Promise<boolean>;
}


class FirstLoginPa extends BaseLoginPa implements FirstLoginPaInterface {

  constructor(public page: FirstLoginPo) {
    super(page);
  }

  // actions

  async enterLogin(login) {
    log.info(`Entering login: ${login}`);
    await this.page.loginField.sendKeys(login);
  }

  async enterPassword(password) {
    log.info(`Entering password: ${password}`);
    await this.page.passwordField.sendKeys(password);
  }

  async clearLogin() {
    log.info(`Clearing login field`);
    await this.page.loginField.clear();
  }

  async clearPassword() {
    log.info(`Clearing password field`);
    await this.page.passwordField.clear();
  }

  // checks

  async loginValidationIsDisplayed() {
    log.info(`Checking if login validation error is present`);
    return await this.page.loginValidationError.isDisplayed();
  }

}


export {FirstLoginPa};
