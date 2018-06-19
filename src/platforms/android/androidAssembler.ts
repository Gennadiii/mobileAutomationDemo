import {assemblerInterface} from "../../assembler";
import {helper} from "../../helpers/helper";
import {ef as elementFinder} from "../../helpers/element_finder/elementFinder.helper";


const {
  generic: {
    page_objects: {
      LoginPo,
      BalancePo,
      LatestTransactionsPo,
    },
    page_actions: {
      LoginPa,
      BalancePa,
      LatestTransactionsPa,
    },
    services: {
      LoginService,
      BalanceService,
      LatestTransactionsService,
      HomeService,
    }
  }
} = (helper.lib.all as any);


const homeBalanceSectionService = helper.assembler.serviceFactory({
  elementFinder,
  service: BalanceService,
  parts: [{po: BalancePo, pa: BalancePa}]
});
const homeLatestTransactionsService = helper.assembler.serviceFactory({
  elementFinder,
  service: LatestTransactionsService,
  parts: [{po: LatestTransactionsPo, pa: LatestTransactionsPa}]
});


const androidServices: assemblerInterface = {

  login: helper.assembler.serviceFactory({
    elementFinder,
    service: LoginService,
    parts: [{po: LoginPo, pa: LoginPa}]
  }),

  home: new HomeService(homeBalanceSectionService, homeLatestTransactionsService),

};


export {androidServices};
