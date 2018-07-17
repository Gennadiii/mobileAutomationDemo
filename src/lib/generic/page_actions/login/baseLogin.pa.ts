import {helper} from "../../../../helpers/helper";
import {BasePa} from "../base.pa";
import {BaseLoginPo} from "../../page_objects/login/baseLogin.po";


const log = helper.logger.get('BaseLoginPa');


interface BaseLoginPaInterface extends BasePa {
  // actions
  enterPassword: (password: string) => Promise<void>;
  clickSignInButton: () => Promise<void>;
  clearPassword: () => Promise<void>;
  // check
  passwordValidationIsDisplayed: () => Promise<boolean>;
}


class BaseLoginPa extends BasePa implements BaseLoginPaInterface {

  constructor(public page: BaseLoginPo) {
    super();
  }


  // actions
  async enterPassword(password) {
    log.info(`Entering password: ${password}`);
    await this.page.passwordField.sendKeys(password);
  }

  async clearPassword() {
    log.info(`Clearing password field`);
    await this.page.passwordField.clear();
  }

  async clickSignInButton() {
    log.info(`Clicking Sign in button`);
    await this.page.signInButton.click();
  }

  // check
  async passwordValidationIsDisplayed() {
    log.info(`Checking if password validation error is present`);
    // password validation message for iOS isVisible option is always false
    return await this.page.passwordValidationError.isPresent();
  }

}


export {BaseLoginPa};
