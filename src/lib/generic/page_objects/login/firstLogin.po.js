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
var inputField_1 = require("../../components/inputField");
var button_1 = require("../../components/button");
var label_1 = require("../../components/label");
var link_1 = require("../../components/link");
var baseLogin_po_1 = require("./baseLogin.po");
var FirstLoginPo = /** @class */ (function (_super) {
    __extends(FirstLoginPo, _super);
    function FirstLoginPo(ef) {
        var _this = _super.call(this, ef) || this;
        _this.ef = ef;
        _this.name = 'FirstLogin';
        _this.languageButton = new button_1.Button(_this.ef.autoId('ChangeLanguage'));
        _this.userSubTitle = new label_1.Label(_this.ef.autoId('UserSubtitle'));
        _this.loginField = new inputField_1.InputField(_this.ef.all.className('android.widget.EditText', { index: 0 }));
        _this.passwordField = new inputField_1.InputField(_this.ef.all.className('android.widget.EditText', { index: 1 }));
        _this.signupLink = new link_1.Link(_this.ef.autoId('Signup'));
        _this.loginValidationError = new label_1.Label(_this.ef.autoId('UsernameValidationError'));
        return _this;
    }
    Object.defineProperty(FirstLoginPo.prototype, "staticElements", {
        get: function () {
            return [this.signupLink];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirstLoginPo.prototype, "content", {
        get: function () {
            return [
                this.languageButton,
                this.userIcon,
                this.userTitle,
                this.userSubTitle,
                this.loginField,
                this.passwordField,
                this.forgotPasswordLink,
                this.signInButton,
                this.signupLink,
            ];
        },
        enumerable: true,
        configurable: true
    });
    return FirstLoginPo;
}(baseLogin_po_1.BaseLoginPo));
exports.FirstLoginPo = FirstLoginPo;
