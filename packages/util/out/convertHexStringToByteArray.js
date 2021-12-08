"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertHexStringToByteArray = (hex) => {
    if (hex.length % 2) {
        throw new Error(`Invalid Hex String: ${hex}`);
    }
    const bytes = new Uint8Array(hex.length / 2);
    for (let c = 0; c < hex.length; c += 2) {
        const byte = parseInt(hex.substr(c, 2), 16);
        if (Number.isNaN(byte)) {
            throw new Error(`Invalid Hex String: ${hex}`);
        }
        bytes[c / 2] = byte;
    }
    return bytes;
};
//# sourceMappingURL=convertHexStringToByteArray.js.map