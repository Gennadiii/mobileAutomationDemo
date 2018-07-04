"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var basePage_pa_1 = require("../basePage.pa");
var helper_1 = require("../../../../helpers/helper");
var log = helper_1.helper.logger.get('HomeSBPa');
var SingleBalancePa = /** @class */ (function (_super) {
    __extends(SingleBalancePa, _super);
    function SingleBalancePa(page) {
        var _this = _super.call(this) || this;
        _this.page = page;
        return _this;
    }
    SingleBalancePa.prototype.balanceContentIsDisplayed = function () {
        log.info("Checking if balance content is displayed");
        var isDisplayedArr = this.page.balanceElements
            .map(function (element) { return element.isDisplayed(); });
        return helper_1.helper.promise.allTrue(isDisplayedArr);
    };
    SingleBalancePa.prototype.cardContentIsNotDisplayed = function () {
        log.info("Checking if card content is not displayed");
        var isNotDisplayedArr = this.page.cardElements
            .map(function (element) { return element.isDisplayed(); });
        return helper_1.helper.promise.allFalse(isNotDisplayedArr);
    };
    return SingleBalancePa;
}(basePage_pa_1.BasePagePa));
exports.SingleBalancePa = SingleBalancePa;
