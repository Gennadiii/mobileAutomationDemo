import {assemblerInterface} from "../../assembler";
import {helper} from "../../helpers/helper";
import {ef as elementFinder} from "../../helpers/element_finder/elementFinder.helper";
import {driver} from "../../../index";


const {
  generic: {
    page_objects: {
      LoginPo,
      BalanceSectionPo,
      LatestTransactionsPo,
      NavigationPo,
    },
    page_actions: {
      LoginPa,
      BalanceSectionPa,
      LatestTransactionsPa,
      NavigationPa,
    },
    services: {
      LoginService,
      BalanceSectionService,
      LatestTransactionsService,
      HomeService,
      AppService,
      UserService,
      CommonService,
      NavigationService,
    }
  }
} = (helper.lib.all as any);


const androidServices: assemblerInterface = {

  common: helper.assembler.serviceFactory({
    service: CommonService,
    completeServices: {
      userService: new UserService(),
      appService: new AppService(driver),
      navigationService: helper.assembler.serviceFactory({
        elementFinder,
        service: NavigationService,
        parts: [{po: NavigationPo, pa: NavigationPa}]
      })
    }
  }),

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
        service: BalanceSectionService,
        parts: [{po: BalanceSectionPo, pa: BalanceSectionPa}]
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
