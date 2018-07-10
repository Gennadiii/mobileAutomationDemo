import {FirstLoginService} from "./firstLogin.service";
import {SecondLoginService} from "./secondLogin.service";
import {BaseService} from "../base.service";


interface LoginServiceInterface {
}


class LoginService extends BaseService implements LoginServiceInterface {


  constructor(public first: FirstLoginService,
              public second: SecondLoginService) {
    super();
  }

}


export {LoginService};
