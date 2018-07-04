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
var FingerprintPo = /** @class */ (function (_super) {
    __extends(FingerprintPo, _super);
    function FingerprintPo(ef) {
        var _this = _super.call(this) || this;
        _this.ef = ef;
        _this.name = 'Fingerprint';
        _this.setupButton = new button_1.Button(_this.ef.autoId('QuickOptionsTouchId'));
        _this.notNowButton = new button_1.Button(_this.ef.autoId('NotNow'));
        return _this;
    }
    Object.defineProperty(FingerprintPo.prototype, "staticElements", {
        get: function () {
            return [this.notNowButton];
        },
        enumerable: true,
        configurable: true
    });
    return FingerprintPo;
}(basePage_po_1.BasePagePo));
exports.FingerprintPo = FingerprintPo;
