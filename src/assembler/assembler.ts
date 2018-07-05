import {androidServices} from "./androidAssembler";
import {LoginService} from "../lib/generic/services/login/login.service";
import {HomeService} from "../lib/generic/services/home/home.service";
import {CommonService} from "../lib/generic/services/common.service";
import {TransactionsService} from "../lib/generic/services/transactions.service";
import {SettingsService} from "../lib/generic/services/settings.service";


interface assemblerInterface {
  common: CommonService;
  login: LoginService;
  home: HomeService;
  transactions: TransactionsService;
  settings: SettingsService;
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
