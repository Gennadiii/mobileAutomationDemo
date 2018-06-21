import {FirstLoginPa} from "../page_actions/login/firstLogin.pa";
import {AppService} from "./app.service";
import {userInterface} from "./user.service";
import {helper} from "../../../helpers/helper";


const log = helper.logger.get('LoginService');


interface LoginServiceInterface {
  as: (user: userInterface) => Promise<void>;
}


class LoginService implements LoginServiceInterface {

  private firstLogin = true;

  constructor(private app: AppService, public page: FirstLoginPa) {
  }

  async as(user: userInterface) {
    const {login, password} = user;
    log.info(`Logging in as "${login}"`);
    await this.relaunchAfterFirstLogin();
    await this.page.enterLogin(login);
    await this.page.enterPassword(password);
    await this.page.signIn();
  }

  private async relaunchAfterFirstLogin() {
    this.firstLogin || await this.app.relaunch();
    this.firstLogin = false;
  }

}


export {LoginService};
