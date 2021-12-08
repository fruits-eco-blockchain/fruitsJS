"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertStringToByteArray = (str) => {
    const s = unescape(encodeURIComponent(str));
    const bytes = new Uint8Array(s.length);
    for (let i = 0; i < s.length; ++i) {
        bytes[i] = s.charCodeAt(i);
    }
    return bytes;
};
//# sourceMappingURL=convertStringToByteArray.js.map