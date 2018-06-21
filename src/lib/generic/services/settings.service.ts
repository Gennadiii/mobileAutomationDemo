import {SettingsPa} from "../page_actions/Settings.pa";


interface SettingsServiceInterface {
  signOut: () => Promise<void>;
}


class SettingsService implements SettingsServiceInterface {

  constructor(public page: SettingsPa) {
  }


  async signOut() {
    await this.page.clickSignOutButton();
  }

}


export {SettingsService};
