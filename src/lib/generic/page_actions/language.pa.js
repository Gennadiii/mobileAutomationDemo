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
var helper_1 = require("../../../helpers/helper");
var basePage_pa_1 = require("./basePage.pa");
var log = helper_1.helper.logger.get('LanguagePa');
var LanguagePa = /** @class */ (function (_super) {
    __extends(LanguagePa, _super);
    function LanguagePa(page) {
        var _this = _super.call(this) || this;
        _this.page = page;
        return _this;
    }
    return LanguagePa;
}(basePage_pa_1.BasePagePa));
exports.LanguagePa = LanguagePa;
