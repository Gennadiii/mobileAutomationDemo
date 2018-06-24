import {SecondLoginPo} from "../../page_objects/login/SecondLogin.po";
import {BaseLoginPa} from "./baseLogin.pa";
import {helper} from "../../../../helpers/helper";


const log = helper.logger.get('SecondLoginPa');


interface SecondLoginPaInterface extends BaseLoginPa {
  clickOptionsButton: () => Promise<void>;
  clickChangeLanguageButton: () => Promise<void>;
  clickSwitchAccountButton: () => Promise<void>;
}


class SecondLoginPa extends BaseLoginPa implements SecondLoginPaInterface {

  constructor(public page: SecondLoginPo) {
    super(page);
  }


  async clickOptionsButton() {
    log.info(`Clicking options button`);
    await this.page.optionsButton.click();
  }

  async clickChangeLanguageButton() {
    log.info(`Clicking change language button`);
    await this.page.changeLanguageButton.click();
  }

  async clickSwitchAccountButton() {
    log.info(`Clicking switch account button`);
    await this.page.switchAccountButton.click();
  }

}


export {SecondLoginPa};
