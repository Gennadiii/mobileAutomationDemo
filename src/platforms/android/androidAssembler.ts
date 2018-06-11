import {assemblerInterface} from "../../assembler";
import {helper} from "../../helpers/helper";
import {ef as elementFinder} from "../../helpers/element_finder/elementFinder.helper";


const {
  generic: {
    page_objects: {LoginPo, HomePo},
    page_actions: {LoginPa, HomePa},
    services: {LoginService, HomeService}
  }
} = (helper.lib.all as any);


const androidServices: assemblerInterface = {

  login: helper.assembler.serviceFactory({
    elementFinder,
    service: LoginService,
    parts: [{po: LoginPo, pa: LoginPa}]
  }),

  home: helper.assembler.serviceFactory({
    elementFinder,
    service: HomeService,
    parts: [{po: HomePo, pa: HomePa}]
  }),

};


export {androidServices};
