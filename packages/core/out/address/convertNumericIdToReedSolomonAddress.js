"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const internal_1 = require("./internal");
exports.convertNumericIdToReedSolomonAddress = (numericId, prefix) => {
    if (!(numericId && prefix)) {
        throw new Error('Invalid arguments');
    }
    if (!/^\d+$/.test(numericId)) {
        throw new Error(`Invalid numeric id: ${numericId}`);
    }
    const plainString10 = [], codeword = internal_1.initialCodeword.slice();
    let pos = 0;
    let length = numericId.length;
    for (let i = 0; i < length; i++) {
        plainString10[i] = numericId.charCodeAt(i) - '0'.charCodeAt(0);
    }
    let digit32 = 0, newLength = 0;
    do {
        digit32 = 0;
        newLength = 0;
        for (let i = 0; i < length; i++) {
            digit32 = digit32 * 10 + plainString10[i];
            if (digit32 >= 32) {
                plainString10[newLength] = digit32 >> 5;
                digit32 &= 31;
                newLength++;
            }
            else if (newLength > 0) {
                plainString10[newLength] = 0;
                newLength++;
            }
        }
        length = newLength;
        codeword[pos] = digit32;
        pos++;
    } while (length > 0);
    const p = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = internal_1.base32Length - 1; i >= 0; i--) {
        const fb = codeword[i] ^ p[10];
        p[10] = p[9] ^ internal_1.gmult(9, fb);
        p[9] = p[8] ^ internal_1.gmult(8, fb);
        p[8] = p[7] ^ internal_1.gmult(7, fb);
        p[7] = p[6] ^ internal_1.gmult(6, fb);
        p[6] = p[5] ^ internal_1.gmult(5, fb);
        p[5] = p[4] ^ internal_1.gmult(4, fb);
        p[4] = p[3] ^ internal_1.gmult(3, fb);
        p[3] = p[2] ^ internal_1.gmult(30, fb);
        p[2] = p[1] ^ internal_1.gmult(6, fb);
        p[1] = p[0] ^ internal_1.gmult(9, fb);
        p[0] = internal_1.gmult(17, fb);
    }
    codeword[13] = p[0];
    codeword[14] = p[1];
    codeword[15] = p[2];
    codeword[16] = p[3];
    codeword[17] = p[4];
    codeword[18] = p[5];
    codeword[19] = p[6];
    codeword[20] = p[7];
    codeword[21] = p[8];
    codeword[22] = p[9];
    codeword[23] = p[10];
    let out = prefix + '-';
    for (let i = 0; i < 24; i++) {
        out += internal_1.alphabet[codeword[internal_1.cwmap[i]]];
        if ((i & 3) === 3 && i < 22) {
            out += '-';
        }
    }
    return out;
};
//# sourceMappingURL=convertNumericIdToReedSolomonAddress.js.map