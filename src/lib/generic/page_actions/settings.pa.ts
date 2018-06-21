import {SettingsPo} from "../page_objects/Settings.po";
import {helper} from "../../../helpers/helper";
import {BasePagePa} from "./basePage.pa";


const log = helper.logger.get('SettingsPa');


interface SettingsPaInterface extends BasePagePa {
  clickSignOutButton: () => Promise<void>;
}


class SettingsPa extends BasePagePa implements SettingsPaInterface {

  constructor(public page: SettingsPo) {
    super();
  }


  async clickSignOutButton() {
    log.info(`Signing out`);
    await this.page.signOutButton.click();
  }

}


export {SettingsPa};
