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
var label_1 = require("../components/label");
var basePage_po_1 = require("./basePage.po");
var componentsList_1 = require("../components/componentsList");
var section_1 = require("../components/section");
var longComponentsList_1 = require("../components/longComponentsList");
var BaseTransactionsPo = /** @class */ (function (_super) {
    __extends(BaseTransactionsPo, _super);
    function BaseTransactionsPo(ef) {
        var _this = _super.call(this) || this;
        _this.ef = ef;
        _this.name = 'Base transactions (SHOULD NOT APPEAR IN LOGS!)';
        _this.items = new longComponentsList_1.LongComponentsList(_this.ef, section_1.Section, _this.ef.all.autoId('ActivityItem', { partial: true }));
        _this.dates = new componentsList_1.ComponentsList(_this.ef, label_1.Label, _this.ef.all.autoId('ActivityDateTitle'));
        _this.descriptions = new componentsList_1.ComponentsList(_this.ef, label_1.Label, _this.ef.all.autoId('ActivityTitle'));
        _this.amounts = new componentsList_1.ComponentsList(_this.ef, label_1.Label, _this.ef.all.autoId('ActivityAmount'));
        _this.currencies = new componentsList_1.ComponentsList(_this.ef, label_1.Label, _this.ef.all.autoId('ActivityCurrency'));
        _this.statuses = new componentsList_1.ComponentsList(_this.ef, label_1.Label, _this.ef.all.autoId('ActivityStatus'));
        return _this;
    }
    return BaseTransactionsPo;
}(basePage_po_1.BasePagePo));
exports.BaseTransactionsPo = BaseTransactionsPo;
