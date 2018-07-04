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
var label_1 = require("../components/label");
var CommonPo = /** @class */ (function (_super) {
    __extends(CommonPo, _super);
    function CommonPo(ef) {
        var _this = _super.call(this) || this;
        _this.ef = ef;
        _this.name = 'Common';
        _this.errorMessage = new label_1.Label(_this.ef.autoId('ErrorMessage'));
        return _this;
    }
    return CommonPo;
}(basePage_po_1.BasePagePo));
exports.CommonPo = CommonPo;
