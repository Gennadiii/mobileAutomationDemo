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
var basePage_po_1 = require("../page_objects/basePage.po");
var log = helper_1.helper.logger.get('BasePagePa');
var basePagePo = new basePage_po_1.BasePagePo();
var BasePagePa = /** @class */ (function () {
    function BasePagePa() {
        var _this = this;
        this.page = basePagePo; // Type any is to avoid inheritance issues
        this.pages = false;
        this.getStaticElements = function () {
            return _this.currentPage.staticElements;
        };
        this.getContent = function () {
            return _this.currentPage.content;
        };
    }
    BasePagePa.prototype.setPages = function (pageActions) {
        this.pages = pageActions.map(function (pageAction) { return pageAction.page; });
    };
    BasePagePa.prototype.isOpen = function (params) {
        if (params === void 0) { params = { timeout: 20 * 1000 }; }
        var timeout = params.timeout;
        return this.checkElementsDisplayed(this.getStaticElements, timeout, 'page is opened');
    };
    BasePagePa.prototype.contentIsDisplayed = function (params) {
        if (params === void 0) { params = { timeout: 20 * 1000 }; }
        var timeout = params.timeout;
        return this.checkElementsDisplayed(this.getContent, timeout, 'page content is displayed');
    };
    BasePagePa.prototype.verifyIsOpen = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.isOpen()];
                    case 1:
                        if (!(_a.sent())) {
                            throw new Error("\"" + this.currentPage.name + "\" page didn't get opened");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    BasePagePa.prototype.checkElementsDisplayed = function (getElements, timeout, logMessage) {
        var _this = this;
        var isDisplayedArr = [];
        if (!this.pages) {
            this.pages = [this.page];
        }
        this.pages.forEach(function (page) {
            _this.currentPage = page;
            log.info("Checking if \"" + page.name + "\" " + logMessage);
            isDisplayedArr.push.apply(isDisplayedArr, getElements()
                .map(function (element) { return element.waitUntilDisplayed(timeout)
                .catch(function () { return false; }); }));
        });
        return helper_1.helper.promise.allTrue(isDisplayedArr);
    };
    return BasePagePa;
}());
exports.BasePagePa = BasePagePa;
