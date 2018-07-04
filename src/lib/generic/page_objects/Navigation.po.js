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
var link_1 = require("../components/link");
var basePage_po_1 = require("./basePage.po");
var NavigationPo = /** @class */ (function (_super) {
    __extends(NavigationPo, _super);
    function NavigationPo(ef) {
        var _this = _super.call(this) || this;
        _this.ef = ef;
        _this.name = 'Navigation';
        _this.homeLink = new link_1.Link(_this.ef.autoId('TabBar.Home.Text'));
        _this.transactionsLink = new link_1.Link(_this.ef.autoId('TabBar.Transactions.Text'));
        _this.actionsLink = new link_1.Link(_this.ef.autoId('TabBar.Actions.Text'));
        _this.settingsLink = new link_1.Link(_this.ef.autoId('TabBar.Settings.Text'));
        return _this;
    }
    Object.defineProperty(NavigationPo.prototype, "staticElements", {
        get: function () {
            return [
                this.homeLink,
                this.transactionsLink,
                this.actionsLink,
                this.settingsLink,
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigationPo.prototype, "content", {
        get: function () {
            return [
                this.homeLink,
                this.transactionsLink,
                this.actionsLink,
                this.settingsLink,
            ];
        },
        enumerable: true,
        configurable: true
    });
    return NavigationPo;
}(basePage_po_1.BasePagePo));
exports.NavigationPo = NavigationPo;
