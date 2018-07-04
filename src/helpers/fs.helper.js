"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
var fsHelper = {
    getFiles: function (dir, result) {
        var _this = this;
        if (result === void 0) { result = []; }
        var files = fs.readdirSync(dir);
        files.forEach(function (file) {
            var name = dir + "/" + file;
            if (fs.statSync(name).isDirectory()) {
                _this.getFiles(name, result);
            }
            else {
                result.push(name);
            }
        });
        return result;
    }
};
exports.fsHelper = fsHelper;
