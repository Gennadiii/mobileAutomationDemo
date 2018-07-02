import {AppService} from "./app.service";
import {NavigationService} from "./navigation.service";
import {UserService} from "./user.service";
import {CommonPa} from "../page_actions/common.pa";


interface CommonServiceInterface {
}


class CommonService implements CommonServiceInterface {

  constructor(public user: UserService,
              public app: AppService,
              public navigateTo: NavigationService,
              public page: CommonPa) {
  }

}


export {CommonService};
