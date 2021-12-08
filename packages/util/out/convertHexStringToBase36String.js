"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_js_1 = require("bignumber.js");
exports.convertHexStringToBase36String = (hex) => {
    return new bignumber_js_1.default(hex, 16).toString(36);
};
//# sourceMappingURL=convertHexStringToBase36String.js.map