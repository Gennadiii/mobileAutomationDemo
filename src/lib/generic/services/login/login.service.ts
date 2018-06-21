import {FirstLoginService} from "./firstLogin.service";
import {SecondLoginService} from "./secondLogin.service";


interface LoginServiceInterface {
}


class LoginService implements LoginServiceInterface {


  constructor(public first: FirstLoginService,
              public second: SecondLoginService) {
  }

}


export {LoginService};
