"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helper_1 = require("./helpers/helper");
function assembleGenericServices(elementFinder, lib, driver) {
    var _a = lib.generic, _b = _a.page_objects, FirstLoginPo = _b.FirstLoginPo, SecondLoginPo = _b.SecondLoginPo, BalanceSectionPo = _b.BalanceSectionPo, LatestTransactionsPo = _b.LatestTransactionsPo, NavigationPo = _b.NavigationPo, TransactionsPo = _b.TransactionsPo, SettingsPo = _b.SettingsPo, HomePo = _b.HomePo, FingerprintPo = _b.FingerprintPo, LanguagePo = _b.LanguagePo, CommonPo = _b.CommonPo, SingleBalancePo = _b.SingleBalancePo, _c = _a.page_actions, FirstLoginPa = _c.FirstLoginPa, SecondLoginPa = _c.SecondLoginPa, BalanceSectionPa = _c.BalanceSectionPa, LatestTransactionsPa = _c.LatestTransactionsPa, NavigationPa = _c.NavigationPa, TransactionsPa = _c.TransactionsPa, SettingsPa = _c.SettingsPa, HomePa = _c.HomePa, FingerprintPa = _c.FingerprintPa, LanguagePa = _c.LanguagePa, CommonPa = _c.CommonPa, SingleBalancePa = _c.SingleBalancePa, _d = _a.services, LoginService = _d.LoginService, FirstLoginService = _d.FirstLoginService, SecondLoginService = _d.SecondLoginService, BalanceSectionService = _d.BalanceSectionService, LatestTransactionsService = _d.LatestTransactionsService, HomeService = _d.HomeService, AppService = _d.AppService, UserService = _d.UserService, CommonService = _d.CommonService, NavigationService = _d.NavigationService, TransactionsService = _d.TransactionsService, SettingsService = _d.SettingsService, FingerprintService = _d.FingerprintService, SingleBalanceService = _d.SingleBalanceService;
    var homeService = helper_1.helper.assembler.serviceFactory({
        elementFinder: elementFinder,
        service: HomeService,
        parts: [{ po: HomePo, pa: HomePa }],
        completeServices: {
            homeBalanceSectionService: helper_1.helper.assembler.serviceFactory({
                elementFinder: elementFinder,
                service: BalanceSectionService,
                parts: [{ po: BalanceSectionPo, pa: BalanceSectionPa }]
            }),
            homeLatestTransactionsService: helper_1.helper.assembler.serviceFactory({
                elementFinder: elementFinder,
                service: LatestTransactionsService,
                parts: [{ po: LatestTransactionsPo, pa: LatestTransactionsPa }]
            }),
            singleBalanceService: helper_1.helper.assembler.serviceFactory({
                elementFinder: elementFinder,
                service: SingleBalanceService,
                parts: [{ po: SingleBalancePo, pa: SingleBalancePa }]
            }),
        },
    });
    var firstLoginService = helper_1.helper.assembler.serviceFactory({
        elementFinder: elementFinder,
        service: FirstLoginService,
        parts: [{ po: FirstLoginPo, pa: FirstLoginPa }],
        completeServices: {
            appService: new AppService(driver),
            homeService: homeService,
        }
    });
    var secondLoginService = helper_1.helper.assembler.serviceFactory({
        elementFinder: elementFinder,
        service: SecondLoginService,
        parts: [
            { po: SecondLoginPo, pa: SecondLoginPa },
            { po: LanguagePo, pa: LanguagePa }
        ],
        completeServices: {
            homeService: homeService,
            fingerprintService: helper_1.helper.assembler.serviceFactory({
                elementFinder: elementFinder,
                service: FingerprintService,
                parts: [{ po: FingerprintPo, pa: FingerprintPa }]
            }),
        }
    });
    return {
        common: helper_1.helper.assembler.serviceFactory({
            elementFinder: elementFinder,
            service: CommonService,
            parts: [{ po: CommonPo, pa: CommonPa }],
            completeServices: {
                userService: new UserService(),
                appService: new AppService(driver),
                navigationService: helper_1.helper.assembler.serviceFactory({
                    elementFinder: elementFinder,
                    service: NavigationService,
                    parts: [{ po: NavigationPo, pa: NavigationPa }],
                })
            }
        }),
        login: helper_1.helper.assembler.serviceFactory({
            service: LoginService,
            completeServices: {
                firstLoginService: firstLoginService,
                secondLoginService: secondLoginService,
            }
        }),
        home: homeService,
        transactions: helper_1.helper.assembler.serviceFactory({
            elementFinder: elementFinder,
            service: TransactionsService,
            parts: [{ po: TransactionsPo, pa: TransactionsPa }]
        }),
        settings: helper_1.helper.assembler.serviceFactory({
            elementFinder: elementFinder,
            service: SettingsService,
            parts: [{ po: SettingsPo, pa: SettingsPa }]
        }),
    };
}
exports.assembleGenericServices = assembleGenericServices;
