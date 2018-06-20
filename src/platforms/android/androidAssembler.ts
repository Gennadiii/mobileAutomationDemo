import {assemblerInterface} from "../../assembler";
import {helper} from "../../helpers/helper";
import {ef as elementFinder} from "../../helpers/element_finder/elementFinder.helper";
import {driver} from "../../../index";


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
      AppService,
      UserService,
    }
  }
} = (helper.lib.all as any);


const androidServices: assemblerInterface = {

  app: new AppService(driver),

  user: new UserService(),

  login: helper.assembler.serviceFactory({
    elementFinder,
    service: LoginService,
    parts: [{po: LoginPo, pa: LoginPa}],
    completeServices: {
      appService: new AppService(driver),
    }
  }),

  home: helper.assembler.serviceFactory({
    service: HomeService,
    completeServices: {
      homeBalanceSectionService: helper.assembler.serviceFactory({
        elementFinder,
        service: BalanceService,
        parts: [{po: BalancePo, pa: BalancePa}]
      }),
      homeLatestTransactionsService: helper.assembler.serviceFactory({
        elementFinder,
        service: LatestTransactionsService,
        parts: [{po: LatestTransactionsPo, pa: LatestTransactionsPa}]
      })
    },
  }),

};


export {androidServices};
