import {NavigationPa} from "../page_actions/Navigation.pa";
import {HomeService} from "./home/home.service";
import {TransactionsService} from "./transactions.service";
import {SettingsService} from "./settings.service";


interface NavigationServiceInterface {
  home: () => Promise<void>;
  transactions: () => Promise<void>;
  actions: () => Promise<void>;
  settings: () => Promise<void>;
}


class NavigationService implements NavigationServiceInterface {

  constructor(private homeService: HomeService,
              private transactionsServcie: TransactionsService,
              private settingsService: SettingsService,
              public page: NavigationPa) {
  }


  async home() {
    await this.page.clickHomeLink();
    await this.homeService.page.verifyIsOpen();
  }

  async transactions() {
    await this.page.clickTransactionsLink();
    await this.transactionsServcie.page.verifyIsOpen();
  }

  async actions() {
    throw new Error('Add actionsService to navigation service');
    // await this.page.clickActionsLink();
  }

  async settings() {
    await this.page.clickSettingsLink();
    await this.settingsService.page.verifyIsOpen();
  }

}


export {NavigationService};
