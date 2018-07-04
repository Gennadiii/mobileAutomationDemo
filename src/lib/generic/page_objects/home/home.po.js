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
var icon_1 = require("../../components/icon");
var label_1 = require("../../components/label");
var link_1 = require("../../components/link");
var HomePo = /** @class */ (function (_super) {
    __extends(HomePo, _super);
    function HomePo(ef) {
        var _this = _super.call(this) || this;
        _this.ef = ef;
        _this.name = 'Home';
        _this.userIcon = new icon_1.Icon(_this.ef.autoId('UserIcon'));
        _this.userTitle = new label_1.Label(_this.ef.autoId('UserTitle'));
        _this.allTransactionsLink = new link_1.Link(_this.ef.autoId('AllActivities'));
        return _this;
    }
    Object.defineProperty(HomePo.prototype, "staticElements", {
        get: function () {
            return [this.userIcon];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomePo.prototype, "content", {
        get: function () {
            return [this.userIcon, this.userTitle];
        },
        enumerable: true,
        configurable: true
    });
    return HomePo;
}(basePage_po_1.BasePagePo));
exports.HomePo = HomePo;
