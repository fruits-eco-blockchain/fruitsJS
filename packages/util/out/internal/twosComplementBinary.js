"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_js_1 = require("bignumber.js");
exports.twosComplementBinary = (bn) => {
    let bin = bn.multipliedBy(-1).toString(2);
    while (bin.length % 8) {
        bin = '0' + bin;
    }
    const prefix = ('1' === bin[0] && -1 !== bin.slice(1).indexOf('1')) ? '11111111' : '';
    bin = bin.split('').map(i => '0' === i ? '1' : '0').join('');
    return new bignumber_js_1.default(prefix + bin, 2).plus(1);
};
//# sourceMappingURL=twosComplementBinary.js.map