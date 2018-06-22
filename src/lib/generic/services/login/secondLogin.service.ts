import {userInterface} from "../user.service";
import {helper} from "../../../../helpers/helper";
import {SecondLoginPa} from "../../page_actions/login/secondLogin.pa";
import {HomeService} from "../home/home.service";


const log = helper.logger.get('SecondLoginService');


interface SecondLoginServiceInterface {
  as: (user: userInterface) => Promise<void>;
}


class SecondLoginService implements SecondLoginServiceInterface {

  constructor(private homeService: HomeService,
              public page: SecondLoginPa) {
  }

  async as(user: userInterface) {
    log.info(`Logging in back`);
    const {password} = user;
    await this.page.enterPassword(password);
    await this.page.clickSignInButton();
    await this.homeService.page.verifyIsOpen();
  }

}


export {SecondLoginService};
