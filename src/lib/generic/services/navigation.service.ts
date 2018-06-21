import {NavigationPa} from "../page_actions/Navigation.pa";


interface NavigationServiceInterface {
  home: () => Promise<void>;
  transactions: () => Promise<void>;
  actions: () => Promise<void>;
  settings: () => Promise<void>;
}


class NavigationService implements NavigationServiceInterface {

  constructor(public page: NavigationPa) {
  }


  async home() {
    await this.page.clickHomeLink();
  }

  async transactions() {
    await this.page.clickTransactionsLink();
  }

  async actions() {
    await this.page.clickActionsLink();
  }

  async settings() {
    await this.page.clickSettingsLink();
  }

}


export {NavigationService};
