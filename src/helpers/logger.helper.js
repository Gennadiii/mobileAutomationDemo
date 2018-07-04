"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typescript_logging_1 = require("typescript-logging");
// Create option instance and specify 1 LogGroupRules:
var options = new typescript_logging_1.LoggerFactoryOptions()
    .addLogGroupRule(new typescript_logging_1.LogGroupRule(new RegExp('.+'), typescript_logging_1.LogLevel.Info));
// Create a named loggerfactory and pass in the options and export the factory.
// Named is since version 0.2.+ (it's recommended for future usage)
var factory = typescript_logging_1.LFService.createNamedLoggerFactory('LoggerFactory', options);
var logger = {
    get: function (name) {
        return factory.getLogger(name.padEnd(21));
    }
};
exports.logger = logger;
