import {androidServices} from "./platforms/android/androidAssembler";
import {LoginService} from "./generic/services/login.service";
import {LandingService} from "./generic/services/landing.service";


interface assemblerInterface {
  login: LoginService;
  landing: LandingService;
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
