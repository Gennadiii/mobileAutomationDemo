"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helper_1 = require("../helpers/helper");
var elementFinder_helper_1 = require("../helpers/element_finder/elementFinder.helper");
var index_1 = require("../../index");
var genericServices_1 = require("./genericServices");
var elementFinder = new elementFinder_helper_1.ElementFinder('name');
var iosServices = genericServices_1.assembleServices(elementFinder, helper_1.helper.lib.all, index_1.driver);
exports.iosServices = iosServices;
