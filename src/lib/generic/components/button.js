"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var InteractableComponent_1 = require("./InteractableComponent");
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(ef) {
        var _this = _super.call(this, ef) || this;
        _this.ef = ef;
        return _this;
    }
    return Button;
}(InteractableComponent_1.InteractableComponent));
exports.Button = Button;
