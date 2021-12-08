"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertNumberToNQTString = (n) => {
    if (n === undefined || n === null) {
        throw new Error('Invalid argument');
    }
    return parseFloat(n.toString())
        .toFixed(8)
        .replace('.', '');
};
//# sourceMappingURL=convertNumberToNQTString.js.map