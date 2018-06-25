import {SettingsPa} from "../page_actions/Settings.pa";
import {helper} from "../../../helpers/helper";


const log = helper.logger.get('SettingsService');


interface SettingsServiceInterface {
  signOut: () => Promise<void>;
}


class SettingsService implements SettingsServiceInterface {

  constructor(public page: SettingsPa) {
  }


  async signOut() {
    log.info(`Signing out`);
    await this.page.clickSignOutButton();
  }

}


export {SettingsService};
