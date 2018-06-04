import {LoginPa} from "../page_actions/login.pa";


interface LoginServiceInterface {
  eyal: () => Promise<any>;
}


class LoginService implements LoginServiceInterface {

  constructor(public page: LoginPa) {
  }

  async eyal() {
    await this.page.enterLogin('eyalmoldovan@hotmail.com ');
    await this.page.enterPassword('1234qwer!');
    await this.page.signIn();
  }

}


export {LoginService};
