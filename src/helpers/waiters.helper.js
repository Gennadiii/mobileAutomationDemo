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
var dateTime_helper_1 = require("./dateTime.helper");
var index_1 = require("../../index");
var waitersHelper = {
    /**
     * @summary uses poll method for a certain amount of time
     * @param {Function} callback - function to poll
     * @param {Number} timeout - time given for polling
     * @param {Number} interval - time between queries
     */
    wait: function (callback, timeout, interval) {
        if (interval === void 0) { interval = 100; }
        return __awaiter(this, void 0, void 0, function () {
            var currentTime, startTime, continuePolling;
            return __generator(this, function (_a) {
                currentTime = function () { return +new Date(); };
                startTime = currentTime();
                continuePolling = function () { return (currentTime() - startTime) < timeout; };
                return [2 /*return*/, poll(callback, continuePolling, interval, false)];
            });
        });
    },
    appiumWait: function (callback, timeout, interval) {
        if (interval === void 0) { interval = 100; }
        return __awaiter(this, arguments, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        index_1.driver.setImplicitTimeout(200);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 4]);
                        return [4 /*yield*/, this.wait.apply(this, arguments)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        index_1.driver.setImplicitTimeout(index_1.driver.defaultImplicitWait);
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    },
    /**
     * @summary uses poll method with number of tries
     * @param {Function} callback - function to poll
     * @param params
     * retryNumber - number of tries
     * interval - time between queries
     */
    retry: function (callback, params) {
        if (params === void 0) { params = { interval: 2 * 1000, retryNumber: 2 }; }
        return __awaiter(this, void 0, void 0, function () {
            var interval, retryNumber, continuePolling;
            return __generator(this, function (_a) {
                interval = params.interval;
                retryNumber = params.retryNumber;
                continuePolling = function () { return retryNumber--; };
                return [2 /*return*/, poll(callback, continuePolling, interval, false)];
            });
        });
    },
};
exports.waitersHelper = waitersHelper;
/**
 * @summary Method polls a callback function
 * @param {Function} callback - function to poll
 * @param {Function} continuePolling - function of outer function which decides when to stop polling
 * @param {Number} interval - time between queries
 * @param cbContinueCondition - primitive which returns the function when doesn't find what needed
 */
function poll(callback, continuePolling, interval, cbContinueCondition) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!continuePolling()) {
                        return [2 /*return*/, Promise.reject("Polling didn't give results.")];
                    }
                    return [4 /*yield*/, callback()];
                case 1:
                    result = _a.sent();
                    process.stdout.write(".");
                    if (result !== cbContinueCondition) {
                        console.info(); // New line after buffer write
                        return [2 /*return*/, result];
                    }
                    return [4 /*yield*/, dateTime_helper_1.dateTimeHelper.sleep(interval)];
                case 2:
                    _a.sent();
                    return [2 /*return*/, poll(callback, continuePolling, interval, cbContinueCondition)];
            }
        });
    });
}
