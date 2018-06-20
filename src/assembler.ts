import {androidServices} from "./platforms/android/androidAssembler";
import {LoginService} from "./lib/generic/services/login.service";
import {HomeService} from "./lib/generic/services/home/home.service";
import {AppService} from "./lib/generic/services/app.service";
import {UserService} from "./lib/generic/services/user.service";


interface assemblerInterface {
  app: AppService;
  user: UserService;
  login: LoginService;
  home: HomeService;
}


const platformServices = {

  Android: androidServices

};

function getServices(params: getServicesInterface): assemblerInterface {
  const {platform} = params;
  return platformServices[platform];
}


export {
  getServices,
  assemblerInterface
};


interface getServicesInterface {
  platform: string;
}
