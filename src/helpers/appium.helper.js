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
var logger_helper_1 = require("./logger.helper");
var waiters_helper_1 = require("./waiters.helper");
var wd = require('wd');
var log = logger_helper_1.logger.get('Driver');
var Driver = /** @class */ (function () {
    function Driver(params) {
        this.params = params;
        this.appium = null;
        this.appiumInitialized = false;
        var _a = this.params, implicitWait = _a.implicitWait, capabilities = _a.capabilities, appiumPort = _a.appiumPort;
        this.capabilities = capabilities;
        this.implicitWait = +implicitWait; // Comes as user input from runtime (string)
        this.defaultImplicitWait = +implicitWait;
        this.appiumPort = +appiumPort; // Comes as user input from runtime (string)
        wd.addPromiseChainMethod('swipe', swipe);
    }
    // actions
    Driver.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var driver;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        log.info("Initializing appium");
                        driver = wd.promiseChainRemote('localhost', this.appiumPort);
                        return [4 /*yield*/, driver
                                .init(this.capabilities)
                                .setImplicitWaitTimeout(0)];
                    case 1:
                        _a.sent();
                        this.appium = driver;
                        return [2 /*return*/, this];
                }
            });
        });
    };
    Driver.prototype.appiumTerminate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        log.info("Terminating appium");
                        return [4 /*yield*/, this.appium.quit()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Driver.prototype.hideKeyboard = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        log.info("Hiding keyboard");
                        return [4 /*yield*/, this.appium.hideKeyboard()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Driver.prototype.appRelaunch = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        log.info("Relaunching app");
                        return [4 /*yield*/, this.appClose()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.appLaunch()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Driver.prototype.swipe = function (params) {
        var startPoint = params.startPoint, endPoint = params.endPoint, _a = params.holdDuration, holdDuration = _a === void 0 ? 800 : _a;
        startPoint.x = startPoint.x || 100;
        endPoint.x = endPoint.x || 100;
        return this.appium.swipe({ startPoint: startPoint, endPoint: endPoint, holdDuration: holdDuration });
    };
    Driver.prototype.scrollDown = function (screenPercentage) {
        if (screenPercentage === void 0) { screenPercentage = 100; }
        return __awaiter(this, void 0, void 0, function () {
            var screenPercentageWithoutNavigationSection, screenSizeWithoutNavigationSection;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (screenPercentage < 1 || screenPercentage > 100) {
                            throw new Error("screenPercentage should be from 1 to 100");
                        }
                        log.info("Scrolling down: " + screenPercentage + "%");
                        screenPercentageWithoutNavigationSection = 0.92;
                        return [4 /*yield*/, this.getScreenSize()];
                    case 1:
                        screenSizeWithoutNavigationSection = (_a.sent()).height *
                            screenPercentageWithoutNavigationSection *
                            screenPercentage / 100;
                        return [4 /*yield*/, this.swipe({ startPoint: { y: screenSizeWithoutNavigationSection }, endPoint: { y: 1 } })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // set
    // Implicit wait seems to be not working in Appium v.1.8.1
    // Own implementation of implicit wait is in Component's element getter
    Driver.prototype.setImplicitTimeout = function (time) {
        this.implicitWait = time;
    };
    // get
    Driver.prototype.element = function (using, value) {
        return this.appium.element(using, value);
    };
    Driver.prototype.elements = function (using, value) {
        return this.appium.elements(using, value);
    };
    Driver.prototype.getScreenSize = function () {
        return this.appium.getWindowSize();
    };
    Driver.prototype.takeScreenshot = function () {
        log.info("Taking screenshot");
        return this.appium.takeScreenshot();
    };
    // wait
    Driver.prototype.waitUntilInitialized = function (appiumInitPromise, timeout) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        process.stdout.write("Waiting for appium to initialize");
                        return [4 /*yield*/, waiters_helper_1.waitersHelper.wait(function () {
                                appiumInitPromise
                                    .then(function () { return _this.appiumInitialized = true; });
                                return _this.appiumInitialized;
                            }, timeout, 100)];
                    case 1:
                        _a.sent();
                        console.info();
                        return [2 /*return*/];
                }
            });
        });
    };
    Driver.prototype.appClose = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        log.info("Closing application");
                        return [4 /*yield*/, this.appium.closeApp()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Driver.prototype.appLaunch = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        log.info("Launching application");
                        return [4 /*yield*/, this.appium.launchApp()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Driver;
}());
exports.Driver = Driver;
function swipe(params) {
    var startPoint = params.startPoint, endPoint = params.endPoint, _a = params.holdDuration, holdDuration = _a === void 0 ? 800 : _a;
    var action = new wd.TouchAction();
    action
        .press(startPoint)
        .wait(holdDuration)
        .moveTo(endPoint)
        .release();
    return this.performTouchAction(action);
}
