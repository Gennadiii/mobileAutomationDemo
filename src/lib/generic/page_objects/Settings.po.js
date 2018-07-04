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
var basePage_po_1 = require("./basePage.po");
var button_1 = require("../components/button");
var SettingsPo = /** @class */ (function (_super) {
    __extends(SettingsPo, _super);
    function SettingsPo(ef) {
        var _this = _super.call(this) || this;
        _this.ef = ef;
        _this.name = 'Settings';
        _this.signOutButton = new button_1.Button(_this.ef.autoId('SignOut'));
        return _this;
    }
    Object.defineProperty(SettingsPo.prototype, "staticElements", {
        get: function () {
            return [this.signOutButton];
        },
        enumerable: true,
        configurable: true
    });
    return SettingsPo;
}(basePage_po_1.BasePagePo));
exports.SettingsPo = SettingsPo;
