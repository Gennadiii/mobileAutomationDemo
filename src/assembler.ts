import {androidServices} from "./platforms/android/androidAssembler";
import {LoginService} from "./lib/generic/services/login.service";
import {HomeService} from "./lib/generic/services/home/home.service";


interface assemblerInterface {
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
