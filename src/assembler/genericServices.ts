import {helper} from "../helpers/helper";
import {assemblerInterface} from "./assembler";


function assembleServices(elementFinder, lib, driver): assemblerInterface {

  const {
    page_objects: {
      FirstLoginPo,
      SecondLoginPo,
      BalanceSectionPo,
      LatestTransactionsPo,
      NavigationPo,
      TransactionsPo,
      SettingsPo,
      HomePo,
      FingerprintPo,
      LanguagePo,
      CommonPo,
      SingleBalancePo,
      ViewBalancePo,
      CardPo,
      FiltersPo,
      DateFilterPo,
      BalanceFilterPo,
      StatusFilterPo,
      TypeFilterPo,
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
      FingerprintPa,
      LanguagePa,
      CommonPa,
      SingleBalancePa,
      ViewBalancePa,
      CardPa,
      FiltersPa,
      DateFilterPa,
      BalanceFilterPa,
      StatusFilterPa,
      TypeFilterPa,
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
      FingerprintService,
      SingleBalanceService,
      ViewBalanceService,
      FiltersService,
    }
  } = lib;


  const viewBalanceService = helper.assembler.serviceFactory({
    elementFinder,
    service: ViewBalanceService,
    parts: [
      {po: ViewBalancePo, pa: ViewBalancePa},
      {po: CardPo, pa: CardPa},
      {po: LatestTransactionsPo, pa: LatestTransactionsPa},
    ]
  });

  const homeService = helper.assembler.serviceFactory({
    elementFinder,
    service: HomeService,
    parts: [
      {po: HomePo, pa: HomePa},
      {po: CommonPo, pa: CommonPa},
    ],
    completeServices: {
      homeBalanceSectionService: helper.assembler.serviceFactory({
        elementFinder,
        service: BalanceSectionService,
        parts: [{po: BalanceSectionPo, pa: BalanceSectionPa}],
        completeServices: {viewBalanceService}
      }),
      homeLatestTransactionsService: helper.assembler.serviceFactory({
        elementFinder,
        service: LatestTransactionsService,
        parts: [{po: LatestTransactionsPo, pa: LatestTransactionsPa}],
      }),
      singleBalanceService: helper.assembler.serviceFactory({
        elementFinder,
        service: SingleBalanceService,
        parts: [{po: SingleBalancePo, pa: SingleBalancePa}],
      }),
      viewBalanceService,
    },
  });

  const firstLoginService = helper.assembler.serviceFactory({
    elementFinder,
    service: FirstLoginService,
    parts: [{po: FirstLoginPo, pa: FirstLoginPa}],
    completeServices: {
      appService: new AppService(driver),
      homeService,
    }
  });

  const secondLoginService = helper.assembler.serviceFactory({
    elementFinder,
    service: SecondLoginService,
    parts: [
      {po: SecondLoginPo, pa: SecondLoginPa},
      {po: LanguagePo, pa: LanguagePa}
    ],
    completeServices: {
      homeService,
      fingerprintService: helper.assembler.serviceFactory({
        elementFinder,
        service: FingerprintService,
        parts: [{po: FingerprintPo, pa: FingerprintPa}]
      }),
    }
  });


  return {

    common: helper.assembler.serviceFactory({
      elementFinder,
      service: CommonService,
      parts: [{po: CommonPo, pa: CommonPa}],
      completeServices: {
        userService: new UserService(),
        appService: new AppService(driver),
        navigationService: helper.assembler.serviceFactory({
          elementFinder,
          service: NavigationService,
          parts: [{po: NavigationPo, pa: NavigationPa}],
        })
      }
    }),

    login: helper.assembler.serviceFactory({
      service: LoginService,
      completeServices: {
        firstLoginService,
        secondLoginService,
      }
    }),

    home: homeService,

    transactions: helper.assembler.serviceFactory({
      elementFinder,
      service: TransactionsService,
      parts: [
        {po: TransactionsPo, pa: TransactionsPa},
        {po: CommonPo, pa: CommonPa},
      ],
      completeServices: {
        filtersService: helper.assembler.serviceFactory({
          elementFinder,
          service: FiltersService,
          parts: [
            {po: FiltersPo, pa: FiltersPa},
            {po: DateFilterPo, pa: DateFilterPa},
            {po: BalanceFilterPo, pa: BalanceFilterPa},
            {po: StatusFilterPo, pa: StatusFilterPa},
            {po: TypeFilterPo, pa: TypeFilterPa},
          ],
        }),
      }
    }),

    settings: helper.assembler.serviceFactory({
      elementFinder,
      service: SettingsService,
      parts: [{po: SettingsPo, pa: SettingsPa}]
    }),

  };

}


export {assembleServices};
