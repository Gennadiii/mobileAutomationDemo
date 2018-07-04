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
var componentsList_1 = require("../components/componentsList");
var button_1 = require("../components/button");
var LanguagePo = /** @class */ (function (_super) {
    __extends(LanguagePo, _super);
    function LanguagePo(ef) {
        var _this = _super.call(this) || this;
        _this.ef = ef;
        _this.name = 'Language';
        _this.languages = new componentsList_1.ComponentsList(_this.ef, button_1.Button, _this.ef.all.autoId('Language'));
        return _this;
    }
    Object.defineProperty(LanguagePo.prototype, "staticElements", {
        get: function () {
            return [this.languages.getElementByIndex(1)];
        },
        enumerable: true,
        configurable: true
    });
    return LanguagePo;
}(basePage_po_1.BasePagePo));
exports.LanguagePo = LanguagePo;
