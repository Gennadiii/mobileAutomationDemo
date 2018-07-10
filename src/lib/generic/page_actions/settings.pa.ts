import {SettingsPo} from "../page_objects/Settings.po";
import {helper} from "../../../helpers/helper";
import {BasePa} from "./base.pa";


const log = helper.logger.get('SettingsPa');


interface SettingsPaInterface extends BasePa {
  clickSignOutButton: () => Promise<void>;
}


class SettingsPa extends BasePa implements SettingsPaInterface {

  constructor(public page: SettingsPo) {
    super();
  }


  async clickSignOutButton() {
    log.info(`Clicking sign out button`);
    await this.page.signOutButton.click();
  }

}


export {SettingsPa};
