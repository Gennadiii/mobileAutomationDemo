"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BasePagePo = /** @class */ (function () {
    function BasePagePo() {
        this.name = 'Base';
    }
    Object.defineProperty(BasePagePo.prototype, "staticElements", {
        get: function () {
            return [Promise.reject(new Error('staticElements getter should be overridden in child classes'))];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasePagePo.prototype, "content", {
        get: function () {
            return [Promise.reject(new Error('content getter should be overridden in child classes'))];
        },
        enumerable: true,
        configurable: true
    });
    return BasePagePo;
}());
exports.BasePagePo = BasePagePo;
