"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger_helper_1 = require("./logger.helper");
var log = logger_helper_1.logger.get('dateTimeHelper');
var dateTimeHelper = {
    sleep: function (timeout, params) {
        if (params === void 0) { params = { ignoreLog: true }; }
        var ignoreLog = params.ignoreLog;
        ignoreLog || log.info("Sleeping: " + timeout / 1000 + " seconds");
        return new Promise(function (resolve) { return setTimeout(resolve, timeout); });
    }
};
exports.dateTimeHelper = dateTimeHelper;
