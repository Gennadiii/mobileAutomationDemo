import {helper} from "../../../../helpers/helper";
import {FirstLoginPo} from "../../page_objects/login/firstLogin.po";
import {BaseLoginPa} from "./baseLogin.pa";


const log = helper.logger.get('FirstLoginPa');


interface FirstLoginPaInterface extends BaseLoginPa {
  // actions
  enterLogin: (login: string) => Promise<void>;
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

  // checks

  async loginValidationIsDisplayed() {
    log.info(`Checking if login validation error is present`);
    return await this.page.loginValidationError.isDisplayed();
  }

}


export {FirstLoginPa};
