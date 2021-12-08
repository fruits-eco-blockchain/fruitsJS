"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
exports.decryptAES = (encryptedBase64, key) => {
    try {
        const decrypted = CryptoJS.AES.decrypt(encryptedBase64, key);
        return decrypted && decrypted.toString(CryptoJS.enc.Utf8);
    }
    catch (e) {
        return undefined;
    }
};
//# sourceMappingURL=decryptAES.js.map