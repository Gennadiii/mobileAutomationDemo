import {NavigationPo} from "../page_objects/Navigation.po";
import {helper} from "../../../helpers/helper";
import {BasePa} from "./base.pa";


const log = helper.logger.get('NavigationPa');


interface NavigationPaInterface extends BasePa {
  clickHomeLink: () => Promise<void>;
  clickTransactionsLink: () => Promise<void>;
  clickActionsLink: () => Promise<void>;
  clickSettingsLink: () => Promise<void>;
}


class NavigationPa extends BasePa implements NavigationPaInterface {

  constructor(public page: NavigationPo) {
    super();
  }


  async clickHomeLink() {
    log.info(`Navigating to home page`);
    await this.page.homeLink.click();
  }

  async clickTransactionsLink() {
    log.info(`Navigating to transactions page`);
    await this.page.transactionsLink.click();
  }

  async clickActionsLink() {
    log.info(`Navigating to actions page`);
    await this.page.actionsLink.click();
  }

  async clickSettingsLink() {
    log.info(`Navigating to settings page`);
    await this.page.settingsLink.click();
  }

}


export {NavigationPa};
