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
var label_1 = require("../../components/label");
var baseTransactions_po_1 = require("../baseTransactions.po");
var link_1 = require("../../components/link");
var LatestTransactionsPo = /** @class */ (function (_super) {
    __extends(LatestTransactionsPo, _super);
    function LatestTransactionsPo(ef) {
        var _this = _super.call(this, ef) || this;
        _this.ef = ef;
        _this.name = 'Home - Latest transactions';
        _this.title = new label_1.Label(_this.ef.autoId('LatestActivityLabel'));
        _this.noTransactionsTitle = new label_1.Label(_this.ef.autoId('NoTransactionsHomeTitle'));
        _this.noTransactionsText = new label_1.Label(_this.ef.autoId('NoTransactionsHomeText'));
        _this.allTransactionsLink = new link_1.Link(_this.ef.autoId('AllActivities'));
        _this.emptyTransactionsContent = [_this.noTransactionsTitle, _this.noTransactionsText];
        return _this;
    }
    Object.defineProperty(LatestTransactionsPo.prototype, "staticElements", {
        get: function () {
            return [this.title];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LatestTransactionsPo.prototype, "content", {
        get: function () {
            return [
                this.title,
                this.items.getElementByIndex(0),
                this.dates.getElementByIndex(0),
                this.descriptions.getElementByIndex(0),
                this.currencies.getElementByIndex(0),
                this.amounts.getElementByIndex(0),
                this.statuses.getElementByIndex(0),
            ];
        },
        enumerable: true,
        configurable: true
    });
    return LatestTransactionsPo;
}(baseTransactions_po_1.BaseTransactionsPo));
exports.LatestTransactionsPo = LatestTransactionsPo;
