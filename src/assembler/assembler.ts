import {CalcService} from "../lib/generic/services/calc.service";
import {AccumulatedCalcService} from "../lib/generic/services/accumulatedCalc.service";
import {DividedCalcService} from "../lib/generic/services/dividedCalc.service";
import {assembleAndroid} from "./androidAssembler";
import {assembleIos} from "./iosAssembler";


interface assemblerInterface {
  calc: CalcService;
  accumulatedCalc: AccumulatedCalcService;
  dividedCalcService: DividedCalcService;
}


const getPlatformServices = {

  Android: assembleAndroid,
  iOS: assembleIos

};

function getServices(params: getServicesInterface): assemblerInterface {
  const {platform} = params;
  return getPlatformServices[platform]();
}


export {
  getServices,
  assemblerInterface
};


interface getServicesInterface {
  platform: string;
}
