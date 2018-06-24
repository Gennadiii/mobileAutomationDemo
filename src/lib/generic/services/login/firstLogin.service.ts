import {FirstLoginPa} from "../../page_actions/login/firstLogin.pa";
import {AppService} from "../app.service";
import {userInterface} from "../user.service";
import {helper} from "../../../../helpers/helper";
import {HomeService} from "../home/home.service";


const log = helper.logger.get('FirstLoginService');


interface FirstLoginServiceInterface {
  as: (user: userInterface) => Promise<void>;
}


class FirstLoginService implements FirstLoginServiceInterface {

  private firstLogin = true;

  constructor(private app: AppService,
              private homeService: HomeService,
              public page: FirstLoginPa) {
  }

  async as(user: userInterface) {
    const {login, password} = user;
    log.info(`Logging in as "${login}"`);
    await this.relaunchAfterFirstLogin();
    await this.page.enterLogin(login);
    await this.page.enterPassword(password);
    await this.page.clickSignInButton();
    await this.homeService.page.verifyIsOpen();
  }

  private async relaunchAfterFirstLogin() {
    this.firstLogin || await this.app.relaunch();
    this.firstLogin = false;
    await this.page.verifyIsOpen();

  }

}


export {FirstLoginService};
