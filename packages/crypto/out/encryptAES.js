"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
exports.encryptAES = (text, key) => {
    return CryptoJS.AES.encrypt(text, key).toString();
};
//# sourceMappingURL=encryptAES.js.map