import {assemblerInterface} from "../../assembler";
import {helper} from "../../helpers/helper";
import {ef as elementFinder} from "../../helpers/element_finder/elementFinder.helper";


const {
  generic: {
    page_objects: {LoginPo, LandingPo},
    page_actions: {LoginPa, LandingPa},
    services: {LoginService, LandingService}
  }
} = (helper.lib.all as any);


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
