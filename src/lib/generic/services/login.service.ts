import {LoginPa} from "../page_actions/login.pa";
import {driver} from "../../../../index";


interface LoginServiceInterface {
  eyal: () => Promise<any>;
}


class LoginService implements LoginServiceInterface {

  private firstLogin = true;

  constructor(public page: LoginPa) {
  }

  async eyal() {
    this.firstLogin || await driver.appRelaunch();
    this.firstLogin = false;
    await this.page.enterLogin('eyalmoldovan@hotmail.com ');
    await this.page.enterPassword('1234qwer!');
    await this.page.signIn();
  }

}


export {LoginService};
