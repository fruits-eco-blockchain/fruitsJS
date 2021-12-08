"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const converter_1 = require("./converter");
const ec_kcdsa_1 = require("./ec-kcdsa");
const CryptoJS = require("crypto-js");
exports.verifySignature = (signature, messageHex, publicKey) => {
    const signatureBytes = converter_1.Converter.convertHexStringToByteArray(signature);
    const publicKeyBytes = converter_1.Converter.convertHexStringToByteArray(publicKey);
    const v = signatureBytes.slice(0, 32);
    const h1 = signatureBytes.slice(32);
    const y = ec_kcdsa_1.ECKCDSA.verify(v, h1, publicKeyBytes);
    const m = converter_1.Converter.convertWordArrayToByteArray(CryptoJS.SHA256(CryptoJS.enc.Hex.parse(messageHex)));
    const m_y = m.concat(y);
    const h2 = converter_1.Converter.convertWordArrayToByteArray(CryptoJS.SHA256(converter_1.Converter.convertByteArrayToWordArray(m_y)));
    const h1hex = converter_1.Converter.convertByteArrayToHexString(h1);
    const h2hex = converter_1.Converter.convertByteArrayToHexString(h2);
    return h1hex === h2hex;
};
//# sourceMappingURL=verifySignature.js.map