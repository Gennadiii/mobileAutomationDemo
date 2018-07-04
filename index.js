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
var appium_helper_1 = require("./src/helpers/appium.helper");
require('dotenv-safe').config();
var jasmine_conf_1 = require("./jasmine-conf");
var testsSelector_helper_1 = require("./src/helpers/testsSelector.helper");
var helper_1 = require("./src/helpers/helper");
var log = helper_1.helper.logger.get('index');
var _a = process.env, platform = _a.platform, deviceName = _a.deviceName, app = _a.app, _b = _a.implicitWait, implicitWait = _b === void 0 ? 7 * 1000 : _b, _c = _a.appiumPort, appiumPort = _c === void 0 ? 4723 : _c, specs = _a.specs;
var platformName = null;
var automationName = null;
var initializationWaitTimeout = null;
switch (platform.toLowerCase()) {
    case 'ios':
        platformName = 'iOS';
        automationName = 'XCUITest';
        initializationWaitTimeout = 2 * 60 * 1000;
        break;
    case 'android':
        platformName = 'Android';
        automationName = 'UiAutomator2';
        initializationWaitTimeout = 60 * 1000;
        break;
    default:
        throw new Error("Wrong platform name: " + platform);
}
var capabilities = {
    deviceName: deviceName,
    app: app,
    platformName: platformName,
    automationName: automationName,
};
if (platformName === 'Android') {
    capabilities.appPackage = 'com.payoneer.android';
    capabilities.appActivity = 'com.payoneer.MainActivity';
}
log.info("Test run is about to start with next configuration:\n" + JSON.stringify({ implicitWait: implicitWait, appiumPort: appiumPort, specs: specs }, null, 4) + "\nCapabilities:\n" + JSON.stringify(capabilities, null, 4));
exports.driver = new appium_helper_1.Driver({
    capabilities: capabilities,
    implicitWait: implicitWait,
    appiumPort: appiumPort
});
var appium = exports.driver.init();
void function main() {
    return __awaiter(this, void 0, void 0, function () {
        var getServices, tests, _a, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 8, , 9]);
                    helper_1.helper.lib.build();
                    return [4 /*yield*/, helper_1.helper.lib.waitReady()];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("./src/assembler/assembler"); })];
                case 2:
                    getServices = (_b.sent()).getServices;
                    jasmine_conf_1.jasmine.env.service = getServices({ platform: platform });
                    _a = specs;
                    if (_a) return [3 /*break*/, 4];
                    return [4 /*yield*/, testsSelector_helper_1.selectTests()];
                case 3:
                    _a = (_b.sent())
                        .map(function (test) { return __dirname + "/spec/" + test; });
                    _b.label = 4;
                case 4:
                    tests = _a;
                    return [4 /*yield*/, exports.driver.waitUntilInitialized(appium, initializationWaitTimeout)];
                case 5:
                    _b.sent();
                    return [4 /*yield*/, jasmine_conf_1.jasmine.addSpecFiles(tests)];
                case 6:
                    _b.sent();
                    return [4 /*yield*/, jasmine_conf_1.jasmine.execute()];
                case 7:
                    _b.sent();
                    return [3 /*break*/, 9];
                case 8:
                    err_1 = _b.sent();
                    log.error(err_1.message);
                    process.exit(13);
                    return [3 /*break*/, 9];
                case 9: return [2 /*return*/];
            }
        });
    });
}();
