"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var helper_1 = require("../../../helpers/helper");
var index_1 = require("../../../../index");
var log = helper_1.helper.logger.get('Component');
var Component = /** @class */ (function () {
    function Component(ef) {
        this.ef = ef;
    }
    Object.defineProperty(Component.prototype, "element", {
        get: function () {
            var _this = this;
            return (function () { return __awaiter(_this, void 0, void 0, function () {
                var getTime, startTime, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getTime = function () { return +new Date(); };
                            startTime = getTime();
                            _a.label = 1;
                        case 1:
                            if (!(getTime() - startTime < index_1.driver.implicitWait)) return [3 /*break*/, 7];
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 4, , 5]);
                            return [4 /*yield*/, this.ef()];
                        case 3:
                            if (_a.sent()) {
                                return [2 /*return*/, this.ef()];
                            }
                            return [3 /*break*/, 5];
                        case 4:
                            err_1 = _a.sent();
                            if (!err_1.message.includes('NoSuchElement')) {
                                throwUnexpectedError(this.ef, err_1);
                            }
                            return [3 /*break*/, 5];
                        case 5: return [4 /*yield*/, helper_1.helper.dateTime.sleep(100)];
                        case 6:
                            _a.sent();
                            return [3 /*break*/, 1];
                        case 7:
                            throwNoSuchElementError(this.ef);
                            return [2 /*return*/];
                    }
                });
            }); })();
        },
        enumerable: true,
        configurable: true
    });
    // get
    Component.prototype.getLocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.element];
                    case 1: return [2 /*return*/, (_a.sent()).getLocation()];
                }
            });
        });
    };
    Component.prototype.getAttribute = function (attribute) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.element];
                    case 1: return [2 /*return*/, (_a.sent()).getAttribute(attribute)];
                }
            });
        });
    };
    // check
    Component.prototype.isDisplayed = function () {
        return __awaiter(this, void 0, void 0, function () {
            var err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.element];
                    case 1: return [2 /*return*/, (_a.sent()).isDisplayed()];
                    case 2:
                        err_2 = _a.sent();
                        if (err_2.message.includes('NoSuchElement')) {
                            return [2 /*return*/, false];
                        }
                        else {
                            throw err_2;
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Component.prototype.scrollUntilDisplayed = function (params) {
        if (params === void 0) { params = { maxScrolls: 3 }; }
        return __awaiter(this, void 0, void 0, function () {
            var maxScrolls, isDisplayed, currentState, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        maxScrolls = params.maxScrolls;
                        log.info("Looking for element with max scrolls: " + maxScrolls);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, , 10, 11]);
                        index_1.driver.setImplicitTimeout(500);
                        _b.label = 2;
                    case 2:
                        if (!maxScrolls--) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.isDisplayed()];
                    case 3:
                        isDisplayed = _b.sent();
                        if (isDisplayed) {
                            return [2 /*return*/, isDisplayed];
                        }
                        return [4 /*yield*/, index_1.driver.takeScreenshot()];
                    case 4:
                        currentState = _b.sent();
                        return [4 /*yield*/, helper_1.helper.dateTime.sleep(200)];
                    case 5:
                        _b.sent();
                        return [4 /*yield*/, index_1.driver.scrollDown()];
                    case 6:
                        _b.sent();
                        _a = currentState;
                        return [4 /*yield*/, index_1.driver.takeScreenshot()];
                    case 7:
                        if (_a === (_b.sent())) {
                            log.info("Reached the bottom");
                            return [3 /*break*/, 8];
                        }
                        return [3 /*break*/, 2];
                    case 8: return [4 /*yield*/, this.isDisplayed()];
                    case 9: return [2 /*return*/, _b.sent()];
                    case 10:
                        index_1.driver.setImplicitTimeout(index_1.driver.defaultImplicitWait);
                        return [7 /*endfinally*/];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    // wait
    Component.prototype.waitUntilDisplayed = function (timeout) {
        var _this = this;
        log.info("Waiting until element is displayed using \"" + this.ef.using + "\" with value: " + this.ef.value);
        return helper_1.helper.waiters.appiumWait(function () { return _this.isDisplayed(); }, timeout);
    };
    return Component;
}());
exports.Component = Component;
function throwUnexpectedError(efFunc, err) {
    log.error("Couldn't find element using: \"" + efFunc.using + "\" with value: " + efFunc.value + ": " + err);
    throw err;
}
function throwNoSuchElementError(efFunc) {
    var errorMessage = "Element is not found using: \"" + efFunc.using + "\" with value: " + efFunc.value;
    index_1.driver.implicitWait > 1000 && log.warn(errorMessage);
    throw new Error("NoSuchElement: " + errorMessage);
}
