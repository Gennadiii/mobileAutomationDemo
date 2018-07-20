import {SettingsPa} from "../../page_actions/settings/settings.pa";
import {helper} from "../../../../helpers/helper";
import {BaseService} from "../base.service";


const log = helper.logger.get('SettingsService');


interface SettingsServiceInterface {
  signOut: () => Promise<void>;
}


class SettingsService extends BaseService implements SettingsServiceInterface {

  constructor(public page: SettingsPa) {
    super();
  }


  async signOut() {
    log.info(`Signing out`);
    await this.page.clickSignOutButton();
  }

}


export {SettingsService};
