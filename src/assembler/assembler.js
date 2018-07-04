"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var androidAssembler_1 = require("./androidAssembler");
var platformServices = {
    Android: androidAssembler_1.androidServices
};
function getServices(params) {
    var platform = params.platform;
    return platformServices[platform];
}
exports.getServices = getServices;
