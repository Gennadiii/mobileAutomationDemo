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
var baseElementFinder_1 = require("./baseElementFinder");
var index_1 = require("../../../index");
var ElementsFinder = /** @class */ (function (_super) {
    __extends(ElementsFinder, _super);
    function ElementsFinder(accessibilityLabelName) {
        var _this = _super.call(this, accessibilityLabelName) || this;
        _this.accessibilityLabelName = accessibilityLabelName;
        _this.searchFunction = findElementsBy;
        return _this;
    }
    return ElementsFinder;
}(baseElementFinder_1.BaseElementFinder));
exports.ElementsFinder = ElementsFinder;
function findElementsBy(using, value, options) {
    var defaults = { index: null };
    var resultingOptions = Object.assign(defaults, options);
    var index = resultingOptions.index;
    var elementsFinder = function () {
        var elements = index_1.driver.elements(using, value);
        return index !== null ? elements.at(index) : elements;
    };
    elementsFinder.using = using;
    elementsFinder.value = value;
    return elementsFinder;
}
