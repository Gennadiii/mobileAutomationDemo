import {AppService} from "./app.service";
import {NavigationService} from "./navigation.service";
import {UserService} from "./user.service";


interface CommonServiceInterface {
}


class CommonService implements CommonServiceInterface {

  constructor(public user: UserService,
              public app: AppService,
              public navigateTo: NavigationService) {
  }


}


export {CommonService};
