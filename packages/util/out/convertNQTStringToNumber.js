"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertNQTStringToNumber = (amount) => {
    if (amount === undefined ||
        amount === null ||
        amount === '') {
        throw new Error('Invalid argument');
    }
    return parseFloat(amount) / 100000000;
};
//# sourceMappingURL=convertNQTStringToNumber.js.map