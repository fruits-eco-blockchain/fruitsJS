"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const internal_1 = require("./internal");
const ensureReedSolomonAddress_1 = require("./ensureReedSolomonAddress");
const tokenizeReedSolomonAddress_1 = require("./tokenizeReedSolomonAddress");
exports.convertReedSolomonAddressToNumericId = (address) => {
    ensureReedSolomonAddress_1.ensureReedSolomonAddress(address);
    const { rs } = tokenizeReedSolomonAddress_1.tokenizeReedSolomonAddress(address);
    const codeword = internal_1.initialCodeword.slice();
    let codewordLength = 0;
    for (let i = 0; i < rs.length; i++) {
        const pos = internal_1.alphabet.indexOf(rs.charAt(i));
        if (pos <= -1 || pos > internal_1.alphabet.length) {
            continue;
        }
        if (codewordLength > 23) {
            throw new Error('Invalid codeword length');
        }
        const codeworkIndex = internal_1.cwmap[codewordLength];
        codeword[codeworkIndex] = pos;
        codewordLength++;
    }
    let length = internal_1.base32Length;
    const cypherString32 = [];
    for (let i = 0; i < length; i++) {
        cypherString32[i] = codeword[length - i - 1];
    }
    let out = '', newLength, digit10 = 0;
    do {
        newLength = 0;
        digit10 = 0;
        for (let i = 0; i < length; i++) {
            digit10 = digit10 * 32 + cypherString32[i];
            if (digit10 >= 10) {
                cypherString32[newLength] = Math.floor(digit10 / 10);
                digit10 %= 10;
                newLength += 1;
            }
            else if (newLength > 0) {
                cypherString32[newLength] = 0;
                newLength += 1;
            }
        }
        length = newLength;
        out += digit10;
    } while (length > 0);
    return out.split('').reverse().join('');
};
//# sourceMappingURL=convertReedSolomonAddressToNumericId.js.map