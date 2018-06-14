import {androidServices} from "./platforms/android/androidAssembler";
import {CalcService} from "./lib/generic/services/calc.service";
import {AccumulatedCalcService} from "./lib/generic/services/accumulatedCalc.service";
import {iosServices} from "./platforms/ios/iosAssembler";


interface assemblerInterface {
  calc: CalcService;
  accumulatedCalc: AccumulatedCalcService;
}


const platformServices = {

  Android: androidServices,
  iOS: iosServices

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
