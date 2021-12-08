"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const converter_1 = require("./converter");
const CryptoJS = require("crypto-js");
exports.getAccountIdFromPublicKey = (publicKey) => {
    const hash = CryptoJS.SHA256(CryptoJS.enc.Hex.parse(publicKey));
    const bytes = converter_1.Converter.convertWordArrayToByteArray(hash);
    let result = '';
    for (let i = 0; i < 8; i++) {
        let byte = bytes[i].toString(16);
        if (byte.length < 2) {
            byte = '0' + byte;
        }
        result = byte + result;
    }
    return hexToDec(result);
};
function hexToDec(s) {
    const digits = [0];
    let i, j, carry;
    for (i = 0; i < s.length; i += 1) {
        carry = parseInt(s.charAt(i), 16);
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
}
//# sourceMappingURL=getAccountIdFromPublicKey.js.map