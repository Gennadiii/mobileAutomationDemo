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
var index_1 = require("../../../index");
var baseElementFinder_1 = require("./baseElementFinder");
var elementsFinder_helper_1 = require("./elementsFinder.helper");
var ElementFinder = /** @class */ (function (_super) {
    __extends(ElementFinder, _super);
    function ElementFinder(accessibilityLabelName) {
        var _this = _super.call(this, accessibilityLabelName) || this;
        _this.accessibilityLabelName = accessibilityLabelName;
        _this.searchFunction = findElementBy;
        return _this;
    }
    Object.defineProperty(ElementFinder.prototype, "all", {
        get: function () {
            return new elementsFinder_helper_1.ElementsFinder(this.accessibilityLabelName);
        },
        enumerable: true,
        configurable: true
    });
    return ElementFinder;
}(baseElementFinder_1.BaseElementFinder));
exports.ElementFinder = ElementFinder;
function findElementBy(using, value) {
    var elementFinder = function () { return index_1.driver.element(using, value); };
    elementFinder.using = using;
    elementFinder.value = value;
    return elementFinder;
}
