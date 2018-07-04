"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Jasmine = require('jasmine');
var jasmine = new Jasmine();
exports.jasmine = jasmine;
jasmine.jasmine.DEFAULT_TIMEOUT_INTERVAL = 70 * 1000;
var JasmineConsoleReporter = require('jasmine-console-reporter');
var reporter = new JasmineConsoleReporter({
    colors: 1,
    cleanStack: 1,
    verbosity: 4,
    listStyle: 'indent',
    activity: false
});
jasmine.loadConfig({
    spec_dir: 'dist/spec',
    random: false,
    seed: null,
    stopSpecOnExpectationFailure: false
});
jasmine.addReporter(reporter);
