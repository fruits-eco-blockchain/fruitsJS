"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialCodeword = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
exports.gexp = [1, 2, 4, 8, 16, 5, 10, 20, 13, 26, 17, 7, 14, 28, 29, 31, 27, 19, 3, 6, 12, 24, 21, 15, 30, 25, 23, 11, 22, 9, 18, 1];
exports.glog = [0, 0, 1, 18, 2, 5, 19, 11, 3, 29, 6, 27, 20, 8, 12, 23, 4, 10, 30, 17, 7, 22, 28, 26, 21, 25, 9, 16, 13, 14, 24, 15];
exports.cwmap = [3, 2, 1, 0, 7, 6, 5, 4, 13, 14, 15, 16, 12, 8, 9, 10, 11, 17, 19, 23, 18, 21, 20, 22];
exports.alphabet = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ'.split('');
exports.base32Length = 13;
const ginv = (a) => {
    return exports.gexp[31 - exports.glog[a]];
};
exports.gmult = (a, b) => {
    if (a === 0 || b === 0) {
        return 0;
    }
    const idx = (exports.glog[a] + exports.glog[b]) % 31;
    return exports.gexp[idx];
};
exports.isDeeplyValidAddress = (address) => {
    const codeword = exports.initialCodeword.slice();
    let codewordLength = 0;
    for (let i = 0; i < address.length; i++) {
        const pos = exports.alphabet.indexOf(address.charAt(i));
        if (pos <= -1 || pos > exports.alphabet.length) {
            continue;
        }
        if (codewordLength > 23) {
            return false;
        }
        const codeworkIndex = exports.cwmap[codewordLength];
        codeword[codeworkIndex] = pos;
        codewordLength++;
    }
    if (codewordLength !== 24) {
        return false;
    }
    return true;
};
//# sourceMappingURL=internal.js.map