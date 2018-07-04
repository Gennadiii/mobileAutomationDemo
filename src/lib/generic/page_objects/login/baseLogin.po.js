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
var basePage_po_1 = require("../basePage.po");
var icon_1 = require("../../components/icon");
var label_1 = require("../../components/label");
var link_1 = require("../../components/link");
var inputField_1 = require("../../components/inputField");
var BaseLoginPo = /** @class */ (function (_super) {
    __extends(BaseLoginPo, _super);
    function BaseLoginPo(ef) {
        var _this = _super.call(this) || this;
        _this.ef = ef;
        _this.name = 'BaseLogin';
        _this.userIcon = new icon_1.Icon(_this.ef.autoId('UserIcon'));
        _this.userTitle = new label_1.Label(_this.ef.autoId('UserTitle'));
        _this.forgotPasswordLink = new link_1.Link(_this.ef.autoId('ForgotPassword'));
        _this.signInButton = new button_1.Button(_this.ef.autoId("SignIn"));
        _this.passwordField = new inputField_1.InputField(_this.ef.className('android.widget.EditText'));
        _this.passwordValidationError = new label_1.Label(_this.ef.autoId('PasswordValidationError'));
        return _this;
    }
    return BaseLoginPo;
}(basePage_po_1.BasePagePo));
exports.BaseLoginPo = BaseLoginPo;
