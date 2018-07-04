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
var button_1 = require("../../components/button");
var componentsList_1 = require("../../components/componentsList");
var section_1 = require("../../components/section");
var label_1 = require("../../components/label");
var longComponentsList_1 = require("../../components/longComponentsList");
var BalanceSectionPo = /** @class */ (function (_super) {
    __extends(BalanceSectionPo, _super);
    function BalanceSectionPo(ef) {
        var _this = _super.call(this) || this;
        _this.ef = ef;
        _this.name = 'Home - Balance section';
        _this.items = new longComponentsList_1.LongComponentsList(_this.ef, section_1.Section, _this.ef.all.autoId('BalanceItem', { partial: true }));
        _this.currencies = new componentsList_1.ComponentsList(_this.ef, label_1.Label, _this.ef.all.autoId('BalanceCurrency'));
        _this.amounts = new componentsList_1.ComponentsList(_this.ef, label_1.Label, _this.ef.all.autoId('BalanceAmount'));
        _this.cards = new componentsList_1.ComponentsList(_this.ef, label_1.Label, _this.ef.all.autoId('BalanceCardLastDigits'));
        _this.moreButton = new button_1.Button(_this.ef.autoId('ShowMore'));
        _this.lessButton = new button_1.Button(_this.ef.autoId('ShowLess'));
        _this.disabledBalanceIcons = new componentsList_1.ComponentsList(_this.ef, label_1.Label, _this.ef.all.autoId('BalanceDisabledIcon'));
        return _this;
    }
    return BalanceSectionPo;
}(basePage_po_1.BasePagePo));
exports.BalanceSectionPo = BalanceSectionPo;
