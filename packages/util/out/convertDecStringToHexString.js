"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./internal/padStartPolyfill");
const bignumber_js_1 = require("bignumber.js");
const twosComplementBinary_1 = require("./internal/twosComplementBinary");
exports.convertDecStringToHexString = (decimal, padding = 2) => {
    let bn = typeof decimal === 'string' ? new bignumber_js_1.default(decimal) : decimal;
    if (bn.isNaN()) {
        throw new Error(`Invalid decimal argument: [${decimal}] - Expected a valid decimal value`);
    }
    if (padding < 0) {
        throw new Error(`Invalid padding argument: [${padding}] - Expected a positive value`);
    }
    const isNegative = bn.lt(0);
    if (isNegative) {
        bn = twosComplementBinary_1.twosComplementBinary(bn);
    }
    const hex = bn.toString(16);
    const padSize = Math.ceil(hex.length / padding);
    return hex.padStart(padSize * padding, isNegative ? 'f' : '0');
};
//# sourceMappingURL=convertDecStringToHexString.js.map