import {helper} from "../../../../helpers/helper";
import {FirstLoginPo} from "../../page_objects/login/firstLogin.po";
import {BaseLoginPa} from "./baseLogin.pa";


const log = helper.logger.get('FirstLoginPa');


interface FirstLoginPaInterface extends BaseLoginPa {
  enterLogin: (login: string) => Promise<void>;
}


class FirstLoginPa extends BaseLoginPa implements FirstLoginPaInterface {

  constructor(public page: FirstLoginPo) {
    super(page);
  }

  async enterLogin(login) {
    log.info(`Entering login: ${login}`);
    await this.page.loginField.sendKeys(login);
  }

}


export {FirstLoginPa};
