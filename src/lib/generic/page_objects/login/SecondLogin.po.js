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
var button_1 = require("../../components/button");
var baseLogin_po_1 = require("./baseLogin.po");
var SecondLoginPo = /** @class */ (function (_super) {
    __extends(SecondLoginPo, _super);
    function SecondLoginPo(ef) {
        var _this = _super.call(this, ef) || this;
        _this.ef = ef;
        _this.name = 'SecondLogin';
        _this.optionsButton = new button_1.Button(_this.ef.autoId('More options'));
        _this.changeLanguageButton = new button_1.Button(_this.ef.all.xpath('//android.widget.TextView[@resource-id]', { index: 0 }));
        _this.switchAccountButton = new button_1.Button(_this.ef.all.xpath('//android.widget.TextView[@resource-id]', { index: 1 }));
        return _this;
    }
    Object.defineProperty(SecondLoginPo.prototype, "staticElements", {
        get: function () {
            return [this.optionsButton];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SecondLoginPo.prototype, "content", {
        get: function () {
            return [
                this.optionsButton,
                this.userIcon,
                this.userTitle,
                this.passwordField,
                this.forgotPasswordLink,
                this.signInButton,
            ];
        },
        enumerable: true,
        configurable: true
    });
    return SecondLoginPo;
}(baseLogin_po_1.BaseLoginPo));
exports.SecondLoginPo = SecondLoginPo;
