import {assemblerInterface} from "../../assembler";
import {helper} from "../../helpers/helper";
import {androidEf as elementFinder} from "../../helpers/element_finder/elementFinder.helper";
import {driver} from "../../../index";


const {
  generic: {
    page_objects: {
      FirstLoginPo,
      SecondLoginPo,
      BalanceSectionPo,
      LatestTransactionsPo,
      NavigationPo,
      TransactionsPo,
      SettingsPo,
      HomePo,
    },
    page_actions: {
      FirstLoginPa,
      SecondLoginPa,
      BalanceSectionPa,
      LatestTransactionsPa,
      NavigationPa,
      TransactionsPa,
      SettingsPa,
      HomePa,
    },
    services: {
      LoginService,
      FirstLoginService,
      SecondLoginService,
      BalanceSectionService,
      LatestTransactionsService,
      HomeService,
      AppService,
      UserService,
      CommonService,
      NavigationService,
      TransactionsService,
      SettingsService,
    }
  }
} = (helper.lib.all as any);


const firstLoginService = helper.assembler.serviceFactory({
  elementFinder,
  service: FirstLoginService,
  parts: [{po: FirstLoginPo, pa: FirstLoginPa}],
  completeServices: {
    appService: new AppService(driver),
  }
});


const androidServices: assemblerInterface = {

  common: helper.assembler.serviceFactory({
    service: CommonService,
    completeServices: {
      userService: new UserService(),
      appService: new AppService(driver, firstLoginService),
      navigationService: helper.assembler.serviceFactory({
        elementFinder,
        service: NavigationService,
        parts: [{po: NavigationPo, pa: NavigationPa}]
      })
    }
  }),

  login: helper.assembler.serviceFactory({
    service: LoginService,
    completeServices: {
      firstLoginService,
      secondLoginService: helper.assembler.serviceFactory({
        elementFinder,
        service: SecondLoginService,
        parts: [{po: SecondLoginPo, pa: SecondLoginPa}]
      })
    }
  }),

  home: helper.assembler.serviceFactory({
    elementFinder,
    service: HomeService,
    parts: [{po: HomePo, pa: HomePa}],
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

  transactions: helper.assembler.serviceFactory({
    elementFinder,
    service: TransactionsService,
    parts: [{po: TransactionsPo, pa: TransactionsPa}]
  }),

  settings: helper.assembler.serviceFactory({
    elementFinder,
    service: SettingsService,
    parts: [{po: SettingsPo, pa: SettingsPa}]
  })

};


export {androidServices};
