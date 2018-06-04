import {assemblerInterface} from "../../assembler";
import {ef} from "../../helpers/element_finder/elementFinder.helper";
import {helper} from "../../helpers/helper";


const {
  generic: {
    page_objects: {LoginPo, LandingPo},
    page_actions: {LoginPa, LandingPa},
    services: {LoginService, LandingService}
  }
} = (<any>helper.lib.all);
const elementFinder = ef;


const androidServices: assemblerInterface = {

  login: helper.assembler.buildService({
    elementFinder,
    service: LoginService,
    parts: [{po: LoginPo, pa: LoginPa}]
  }),

  landing: helper.assembler.buildService({
    elementFinder,
    service: LandingService,
    parts: [{po: LandingPo, pa: LandingPa}]
  }),

};


export {androidServices};
