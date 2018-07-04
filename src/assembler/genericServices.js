"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helper_1 = require("../helpers/helper");
function assembleServices(elementFinder, lib, driver) {
    var _a = lib.page_objects, FirstLoginPo = _a.FirstLoginPo, SecondLoginPo = _a.SecondLoginPo, BalanceSectionPo = _a.BalanceSectionPo, LatestTransactionsPo = _a.LatestTransactionsPo, NavigationPo = _a.NavigationPo, TransactionsPo = _a.TransactionsPo, SettingsPo = _a.SettingsPo, HomePo = _a.HomePo, FingerprintPo = _a.FingerprintPo, LanguagePo = _a.LanguagePo, CommonPo = _a.CommonPo, SingleBalancePo = _a.SingleBalancePo, _b = lib.page_actions, FirstLoginPa = _b.FirstLoginPa, SecondLoginPa = _b.SecondLoginPa, BalanceSectionPa = _b.BalanceSectionPa, LatestTransactionsPa = _b.LatestTransactionsPa, NavigationPa = _b.NavigationPa, TransactionsPa = _b.TransactionsPa, SettingsPa = _b.SettingsPa, HomePa = _b.HomePa, FingerprintPa = _b.FingerprintPa, LanguagePa = _b.LanguagePa, CommonPa = _b.CommonPa, SingleBalancePa = _b.SingleBalancePa, _c = lib.services, LoginService = _c.LoginService, FirstLoginService = _c.FirstLoginService, SecondLoginService = _c.SecondLoginService, BalanceSectionService = _c.BalanceSectionService, LatestTransactionsService = _c.LatestTransactionsService, HomeService = _c.HomeService, AppService = _c.AppService, UserService = _c.UserService, CommonService = _c.CommonService, NavigationService = _c.NavigationService, TransactionsService = _c.TransactionsService, SettingsService = _c.SettingsService, FingerprintService = _c.FingerprintService, SingleBalanceService = _c.SingleBalanceService;
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
exports.assembleServices = assembleServices;
