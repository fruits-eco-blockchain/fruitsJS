"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
const ec_kcdsa_1 = require("./ec-kcdsa");
const converter_1 = require("./converter");
exports.generateMasterKeys = (passPhrase) => {
    const hashedPassPhrase = CryptoJS.SHA256(passPhrase);
    const keys = ec_kcdsa_1.ECKCDSA.keygen(converter_1.Converter.convertWordArrayToByteArray(hashedPassPhrase));
    return {
        publicKey: converter_1.Converter.convertByteArrayToHexString(keys.p),
        signPrivateKey: converter_1.Converter.convertByteArrayToHexString(keys.s),
        agreementPrivateKey: converter_1.Converter.convertByteArrayToHexString(keys.k)
    };
};
//# sourceMappingURL=generateMasterKeys.js.map