import {FirstLoginService} from "./login/firstLogin.service";


interface AppServiceInterface {
  relaunch: () => Promise<void>;
}


class AppService implements AppServiceInterface {


  constructor(private driver, private firstLoginService: FirstLoginService) {
  }


  async relaunch() {
    await this.driver.appRelaunch();
    await this.firstLoginService.page.verifyIsOpen();
  }

}


export {AppService};
