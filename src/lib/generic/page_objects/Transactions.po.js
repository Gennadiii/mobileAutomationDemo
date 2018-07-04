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
var button_1 = require("../components/button");
var label_1 = require("../components/label");
var baseTransactions_po_1 = require("./baseTransactions.po");
var componentsList_1 = require("../components/componentsList");
var TransactionsPo = /** @class */ (function (_super) {
    __extends(TransactionsPo, _super);
    function TransactionsPo(ef) {
        var _this = _super.call(this, ef) || this;
        _this.ef = ef;
        _this.name = 'Transactions';
        _this.title = new label_1.Label(_this.ef.autoId('PageTitle'));
        _this.allTransactionsLabel = new label_1.Label(_this.ef.autoId('AllTransactionsTitle'));
        _this.filtersButton = new button_1.Button(_this.ef.autoId('Filters'));
        _this.runningBalances = new componentsList_1.ComponentsList(_this.ef, label_1.Label, _this.ef.all.autoId('ActivityRunningBalance'));
        return _this;
    }
    Object.defineProperty(TransactionsPo.prototype, "staticElements", {
        get: function () {
            return [this.title];
        },
        enumerable: true,
        configurable: true
    });
    return TransactionsPo;
}(baseTransactions_po_1.BaseTransactionsPo));
exports.TransactionsPo = TransactionsPo;
