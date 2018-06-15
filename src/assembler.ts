import {androidServices} from "./platforms/android/androidAssembler";
import {CalcService} from "./lib/generic/services/calc.service";
import {AccumulatedCalcService} from "./lib/generic/services/accumulatedCalc.service";
import {iosServices} from "./platforms/ios/iosAssembler";
import {DividedCalcService} from "./lib/generic/services/dividedCalc.service";


interface assemblerInterface {
  calc: CalcService;
  accumulatedCalc: AccumulatedCalcService;
  dividedCalcService: DividedCalcService;
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
