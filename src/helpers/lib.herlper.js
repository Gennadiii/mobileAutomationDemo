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
var fs_helper_1 = require("./fs.helper");
var logger_helper_1 = require("./logger.helper");
var waiters_helper_1 = require("./waiters.helper");
var fs = require('fs');
var log = logger_helper_1.logger.get('libHelper');
var libHelper = {
    all: null,
    build: function () {
        var _this = this;
        log.info("Building lib");
        var lib = {};
        var libDir = __dirname + "/../lib";
        var platforms = fs.readdirSync(libDir);
        platforms.forEach(function (platform) {
            lib[platform] = {};
            var libTypes = fs.readdirSync(libDir + "/" + platform);
            libTypes.forEach(function (libType) {
                lib[platform][libType] = {};
                fs_helper_1.fsHelper.getFiles(libDir + "/" + platform + "/" + libType)
                    .forEach(function (file) { return __awaiter(_this, void 0, void 0, function () {
                    var className, importedFile;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                className = getClassName(file);
                                lib[platform][libType][className] = null;
                                return [4 /*yield*/, Promise.resolve().then(function () { return require(file); })];
                            case 1:
                                importedFile = _a.sent();
                                lib[platform][libType][className] = importedFile[className];
                                return [2 /*return*/];
                        }
                    });
                }); });
            });
        });
        this.all = lib;
    },
    findBrokenParts: function (lib) {
        var broken = [];
        findNestedObjects(lib)
            .forEach(function (obj) { return Object.keys(obj)
            .forEach(function (key) { return obj[key] || broken.push(key); }); });
        return broken;
    },
    waitReady: function () {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        log.info("Waiting for lib build finish");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, waiters_helper_1.waitersHelper.wait(function () { return !_this.findBrokenParts(_this.all).length; }, 1000, 10)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        log.error(err_1);
                        throw new Error("Lib didn't build correctly: \n      " + JSON.stringify(this.findBrokenParts(this.all)));
                    case 4:
                        log.info("Lib build - success");
                        return [2 /*return*/];
                }
            });
        });
    },
};
exports.libHelper = libHelper;
function getClassName(path) {
    return path
        .replace(/.*[\\/]/, '')
        .split('.')
        .slice(0, -1)
        .map(function (el) { return capitalize(el); })
        .join('');
}
function findNestedObjects(obj, result) {
    if (result === void 0) { result = [obj]; }
    Object.values(obj).forEach(function (value) {
        if (value && typeof value === 'object') {
            result.push(value);
            return findNestedObjects(value, result);
        }
    });
    return result;
}
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.substr(1);
}
