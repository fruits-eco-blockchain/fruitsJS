"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertByteArrayToHexString = (bytes, uppercase = false) => {
    const hex = [];
    for (let i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
    }
    return uppercase ? hex.join('').toUpperCase() : hex.join('');
};
//# sourceMappingURL=convertByteArrayToHexString.js.map