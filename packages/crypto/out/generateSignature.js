"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const converter_1 = require("./converter");
const ec_kcdsa_1 = require("./ec-kcdsa");
const CryptoJS = require("crypto-js");
exports.generateSignature = (messageHex, privateKey) => {
    const s = converter_1.Converter.convertHexStringToByteArray(privateKey);
    const m = converter_1.Converter.convertWordArrayToByteArray(CryptoJS.SHA256(CryptoJS.enc.Hex.parse(messageHex)));
    const m_s = m.concat(s);
    const x = converter_1.Converter.convertWordArrayToByteArray(CryptoJS.SHA256(converter_1.Converter.convertByteArrayToWordArray(m_s)));
    const y = ec_kcdsa_1.ECKCDSA.keygen(x).p;
    const m_y = m.concat(y);
    const h = converter_1.Converter.convertWordArrayToByteArray(CryptoJS.SHA256(converter_1.Converter.convertByteArrayToWordArray(m_y)));
    const v = ec_kcdsa_1.ECKCDSA.sign(h, x, s);
    return converter_1.Converter.convertByteArrayToHexString([].concat(v, h));
};
//# sourceMappingURL=generateSignature.js.map