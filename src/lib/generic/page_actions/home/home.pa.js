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
var basePage_pa_1 = require("../basePage.pa");
var HomePa = /** @class */ (function (_super) {
    __extends(HomePa, _super);
    function HomePa(page) {
        var _this = _super.call(this) || this;
        _this.page = page;
        return _this;
    }
    return HomePa;
}(basePage_pa_1.BasePagePa));
exports.HomePa = HomePa;
