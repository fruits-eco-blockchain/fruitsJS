"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertHexEndianess = (hexString) => {
    let result = '';
    const rawData = hexString;
    for (let i = rawData.length - 1; i >= 0; i -= 2) {
        result += rawData[i - 1] + rawData[i];
    }
    return result;
};
//# sourceMappingURL=convertHexEndianess.js.map