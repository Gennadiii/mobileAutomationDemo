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
var basePage_po_1 = require("../basePage.po");
var label_1 = require("../../components/label");
var SingleBalancePo = /** @class */ (function (_super) {
    __extends(SingleBalancePo, _super);
    function SingleBalancePo(ef) {
        var _this = _super.call(this) || this;
        _this.ef = ef;
        _this.name = 'Home - Single Balance';
        _this.balanceTitle = new label_1.Label(_this.ef.autoId('OneBalanceTitle'));
        _this.balanceAmount = new label_1.Label(_this.ef.autoId('OneBalanceAmount'));
        _this.cardTitle = new label_1.Label(_this.ef.autoId('CardTitle'));
        _this.cardNumber = new label_1.Label(_this.ef.autoId('CardNumber'));
        _this.cardAmount = new label_1.Label(_this.ef.autoId('CardAmount'));
        _this.cardCurrency = new label_1.Label(_this.ef.autoId('CardCurrency'));
        _this.balanceElements = [_this.balanceTitle, _this.balanceAmount];
        _this.cardElements = [_this.cardTitle, _this.cardNumber, _this.cardAmount, _this.cardCurrency];
        return _this;
    }
    Object.defineProperty(SingleBalancePo.prototype, "staticElements", {
        get: function () {
            return [this.balanceTitle, this.balanceAmount];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SingleBalancePo.prototype, "content", {
        get: function () {
            return [
                this.balanceTitle,
                this.balanceAmount,
                this.cardTitle,
                this.cardNumber,
                this.cardAmount,
                this.cardCurrency,
            ];
        },
        enumerable: true,
        configurable: true
    });
    return SingleBalancePo;
}(basePage_po_1.BasePagePo));
exports.SingleBalancePo = SingleBalancePo;
