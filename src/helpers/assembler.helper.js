"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger_helper_1 = require("./logger.helper");
var log = logger_helper_1.logger.get('assembler');
var assembler = {
    serviceFactory: function (params) {
        var service = params.service, elementFinder = params.elementFinder, parts = params.parts, completeServices = params.completeServices;
        var actions = parts && parts.map(function (part) {
            try {
                var po = part.po, pa = part.pa;
                return new pa(new po(elementFinder));
            }
            catch (err) {
                log.error("Could not assemble service:\n        Service: " + service + "\n        parts: " + JSON.stringify(parts, null, 4));
                throw err;
            }
        });
        var services = completeServices && Object.values(completeServices);
        if (actions && services) {
            return new (service.bind.apply(service, [void 0].concat(services, actions)))();
        }
        else if (actions) {
            return new (service.bind.apply(service, [void 0].concat(actions)))();
        }
        else {
            return new (service.bind.apply(service, [void 0].concat(services)))();
        }
    }
};
exports.assembler = assembler;
