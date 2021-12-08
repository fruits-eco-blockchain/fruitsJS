"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertHexStringToDecString = (hexStr) => {
    const digits = [0];
    let i, j, carry;
    for (i = 0; i < hexStr.length; i += 1) {
        carry = parseInt(hexStr.charAt(i), 16);
        for (j = 0; j < digits.length; j += 1) {
            digits[j] = digits[j] * 16 + carry;
            carry = digits[j] / 10 | 0;
            digits[j] %= 10;
        }
        while (carry > 0) {
            digits.push(carry % 10);
            carry = carry / 10 | 0;
        }
    }
    return digits.reverse().join('');
};
//# sourceMappingURL=convertHexStringToDecString.js.map