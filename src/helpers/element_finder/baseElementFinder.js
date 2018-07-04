"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseElementFinder = /** @class */ (function () {
    function BaseElementFinder(accessibilityLabelName) {
        this.accessibilityLabelName = accessibilityLabelName;
        this.autoIdAttribute = 'contentDescription';
    }
    BaseElementFinder.prototype.id = function (id, options) {
        return this.searchFunction('id', id, options);
    };
    BaseElementFinder.prototype.accessibilityId = function (accessibilityId, options) {
        return this.searchFunction('accessibility id', accessibilityId, options);
    };
    BaseElementFinder.prototype.xpath = function (xpath, options) {
        return this.searchFunction('xpath', xpath, options);
    };
    BaseElementFinder.prototype.className = function (className, options) {
        return this.searchFunction('class name', className, options);
    };
    BaseElementFinder.prototype.text = function (text, options) {
        if (options === void 0) { options = { partial: false }; }
        var partial = options.partial;
        var locator = partial
            ? "//*[contains(@text, '" + text + "')]"
            : "//*[@text = '" + text + "']";
        return this.searchFunction('xpath', locator, options);
    };
    BaseElementFinder.prototype.autoId = function (id, options) {
        if (options === void 0) { options = { partial: false }; }
        var partial = options.partial;
        return partial
            ? this.searchFunction('xpath', "//*[contains(@" + this.accessibilityLabelName + ", '" + id + "')]", options)
            : this.accessibilityId(id, options);
    };
    BaseElementFinder.prototype.element = function (using, value, options) {
        return this.searchFunction(using, value, options);
    };
    return BaseElementFinder;
}());
exports.BaseElementFinder = BaseElementFinder;
