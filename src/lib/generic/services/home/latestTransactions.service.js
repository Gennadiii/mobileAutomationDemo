"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helper_1 = require("../../../../helpers/helper");
var log = helper_1.helper.logger.get("HomeLTService");
var LatestTransactionsService = /** @class */ (function () {
    function LatestTransactionsService(page) {
        this.page = page;
    }
    // get
    LatestTransactionsService.prototype.count = function () {
        return this.page.countTransactions();
    };
    return LatestTransactionsService;
}());
exports.LatestTransactionsService = LatestTransactionsService;
