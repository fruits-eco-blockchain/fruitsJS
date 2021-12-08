"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
exports.hashSHA256 = (input) => {
    return CryptoJS.SHA256(input).toString();
};
//# sourceMappingURL=hashSHA256.js.map