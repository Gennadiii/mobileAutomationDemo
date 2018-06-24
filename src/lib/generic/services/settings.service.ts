import {SettingsPa} from "../page_actions/Settings.pa";
import {SecondLoginService} from "./login/secondLogin.service";
import {helper} from "../../../helpers/helper";


const log = helper.logger.get('SettingsService');


interface SettingsServiceInterface {
  signOut: () => Promise<void>;
}


class SettingsService implements SettingsServiceInterface {

  constructor(private secondLoginService: SecondLoginService,
              public page: SettingsPa) {
  }


  async signOut() {
    log.info(`Signing out`);
    await this.page.clickSignOutButton();
    await this.secondLoginService.page.verifyIsOpen();
  }

}


export {SettingsService};
