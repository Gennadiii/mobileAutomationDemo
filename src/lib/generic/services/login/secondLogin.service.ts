import {userInterface} from "../user.service";
import {helper} from "../../../../helpers/helper";
import {SecondLoginPa} from "../../page_actions/login/secondLogin.pa";


const log = helper.logger.get('SecondLoginService');


interface SecondLoginServiceInterface {
  as: (user: userInterface) => Promise<void>;
}


class SecondLoginService implements SecondLoginServiceInterface {

  constructor(public page: SecondLoginPa) {
  }

  async as(user: userInterface) {
    log.info(`Logging in back`);
    const {password} = user;
    await this.page.enterPassword(password);
    await this.page.clickSignInButton();
  }

}


export {SecondLoginService};
