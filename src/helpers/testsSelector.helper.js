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
var multiPrompt = require('multiselect-prompt');
var prompt = require('select-prompt');
var fs = require('fs');
var specsPath = __dirname + "/../../spec/";
var testChoiceNumberPath = __dirname + "/testChoiceNumber.indexHelper";
var featureChoiceNumberPath = __dirname + "/featureChoiceNumber.indexHelper";
var testsCollections = {
    smoke: 'smoke',
    otherThanSmoke: 'other than smoke',
};
var selectedFeatureChangedFromLastRun = true;
var testsPaths = null;
function selectTests() {
    return __awaiter(this, void 0, void 0, function () {
        var features, featurePromptOptions, selectedFeature, promptOptions, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    features = [testsCollections.otherThanSmoke, testsCollections.smoke]
                        .concat(getFeatures());
                    featurePromptOptions = getPromptObj(features);
                    return [4 /*yield*/, promptFeature(featurePromptOptions)];
                case 1:
                    selectedFeature = _a.sent();
                    if (selectedFeatureDidNotChangeFromLastInput(features, selectedFeature)) {
                        selectedFeatureChangedFromLastRun = false;
                    }
                    writeFeatureInput(features, selectedFeature);
                    if (selectedFeature === testsCollections.smoke) {
                        testsPaths = fs_helper_1.fsHelper.getFiles(specsPath).filter(base);
                    }
                    else if (selectedFeature === testsCollections.otherThanSmoke) {
                        testsPaths = fs_helper_1.fsHelper.getFiles(specsPath).filter(otherThanBase);
                    }
                    else {
                        testsPaths = fs_helper_1.fsHelper.getFiles(specsPath + "/" + selectedFeature);
                    }
                    promptOptions = getPromptObj(testsPaths).filter(specs);
                    selectedFeatureChangedFromLastRun || preselectLastInput(promptOptions);
                    return [4 /*yield*/, promptTests(promptOptions)];
                case 2: return [2 /*return*/, _a.sent()];
                case 3:
                    err_1 = _a.sent();
                    console.error("Can't start tests: " + err_1);
                    throw err_1;
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.selectTests = selectTests;
function getPromptObj(arr) {
    return arr.map(function (el) {
        var element = cutPathToSpecFolder(el);
        return {
            title: element,
            value: element,
            selected: false,
        };
    });
}
function promptFeature(options) {
    return new Promise(function (resolve) {
        var rememberedInput = +readRememberedInput(featureChoiceNumberPath)[0];
        var cursor = rememberedInput >= 0
            ? rememberedInput
            : getMiddle(options);
        console.info('Press esc to choose everything');
        prompt('Select area:', options, { cursor: cursor })
            .on('submit', resolve)
            .on('abort', function () { return resolve(''); });
    });
}
function promptTests(options) {
    console.info("Choose nothing to go with everything");
    return new Promise(function (resolve) {
        var rememberedInput = readRememberedInput(testChoiceNumberPath);
        var cursor = selectedFeatureChangedFromLastRun || rememberedInput.length === 0
            ? getMiddle(options)
            : rememberedInput[getMiddle(rememberedInput)];
        multiPrompt('Select tests to run: ', options, { cursor: cursor })
            .on('submit', function (items) {
            writeTestsInput(items);
            var chosenItems = getSelectedItemsValues(items);
            chosenItems.length === 0 && markAllItemsSelected(items);
            var chosenAndPreselected = getSelectedItemsValues(items);
            console.info("Running tests: ");
            logChoices(chosenAndPreselected);
            resolve(chosenAndPreselected);
        });
    });
}
function markAllItemsSelected(items) {
    items.forEach(function (item) { return item.selected = true; });
}
function logChoices(items) {
    console.info();
    items.forEach(function (item) { return console.info(item); });
    console.info();
}
function getSelectedItemsValues(items) {
    return items.filter(function (item) { return item.selected; })
        .map(function (item) { return item.value; });
}
function writeTestsInput(items) {
    var indexes = [];
    items.forEach(function (item, index) {
        item.selected && indexes.push(index);
    });
    fs.writeFileSync(testChoiceNumberPath, indexes);
}
function writeFeatureInput(features, selectedFeature) {
    fs.writeFileSync(featureChoiceNumberPath, features.indexOf(selectedFeature));
}
function readRememberedInput(path) {
    try {
        var rememberedInput = fs.readFileSync(path).toString();
        return rememberedInput ? rememberedInput.split(',') : [];
    }
    catch (err) {
        if (err.message.includes('ENOENT')) {
            return [];
        }
        else {
            throw err;
        }
    }
}
function preselectLastInput(items) {
    var lastInputs = readRememberedInput(testChoiceNumberPath);
    lastInputs.forEach(function (lastInput) { return items[lastInput].selected = true; });
}
function getFeatures() {
    return fs.readdirSync(specsPath)
        .filter(function (str) { return !str.includes('.'); });
}
function selectedFeatureDidNotChangeFromLastInput(features, selectedFeature) {
    return features.indexOf(selectedFeature) === +readRememberedInput(featureChoiceNumberPath)[0];
}
function specs(file) {
    return file.title.includes('.spec');
}
function base(file) {
    return file.includes('base');
}
function otherThanBase(file) {
    return !file.includes('base');
}
function cutPathToSpecFolder(file) {
    return file.replace(/.*spec[\\/]/, '');
}
function getMiddle(options) {
    return Math.floor(options.length / 2);
}
