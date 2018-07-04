"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HomeService = /** @class */ (function () {
    function HomeService(balanceSection, latestTransactions, singleBalance, page) {
        this.balanceSection = balanceSection;
        this.latestTransactions = latestTransactions;
        this.singleBalance = singleBalance;
        this.page = page;
        this.page.setPages([
            this.latestTransactions.page,
            this.page
        ]);
    }
    return HomeService;
}());
exports.HomeService = HomeService;
