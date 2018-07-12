import {FirstLoginPa} from "../../page_actions/login/firstLogin.pa";
import {AppService} from "../app.service";
import {userInterface} from "../user.service";
import {helper} from "../../../../helpers/helper";
import {HomeService} from "../home/home.service";
import {BaseService} from "../base.service";


const log = helper.logger.get('FirstLoginService');


interface FirstLoginServiceInterface {
  as: (user: userInterface) => Promise<void>;
}


class FirstLoginService extends BaseService implements FirstLoginServiceInterface {

  constructor(private app: AppService,
              private homeService: HomeService,
              public page: FirstLoginPa) {
    super();
  }

  async as(user: userInterface) {
    const {login, password} = user;
    log.info(`Logging in as "${login}"`);
    await this.app.relaunch();
    await this.page.verifyIsOpen();
    await this.page.enterLogin(login);
    await this.page.enterPassword(password);
    await this.page.clickSignInButton();
    await this.homeService.verifyPageIsOpen();
  }

}


export {FirstLoginService};
