"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
const deflate_1 = require("pako/lib/deflate");
const ec_kcdsa_1 = require("./ec-kcdsa");
const converter_1 = require("./converter");
const IV_LENGTH = 16;
const SHARED_KEY_SIZE = 32;
function encrypt(plaintext, nonce, sharedKeyOrig) {
    const sharedKey = sharedKeyOrig.slice(0);
    for (let i = 0; i < SHARED_KEY_SIZE; i++) {
        sharedKey[i] ^= nonce[i];
    }
    const key = CryptoJS.SHA256(converter_1.Converter.convertByteArrayToWordArray(sharedKey));
    const data = converter_1.Converter.convertByteArrayToWordArray(plaintext);
    const encrypted = CryptoJS.AES.encrypt(data, key, {
        iv: CryptoJS.lib.WordArray.random(IV_LENGTH)
    });
    const ivOut = converter_1.Converter.convertWordArrayToByteArray(encrypted.iv);
    const ciphertextOut = converter_1.Converter.convertWordArrayToByteArray(encrypted.ciphertext);
    return ivOut.concat(ciphertextOut);
}
function encryptData(plaintext, recipientPublicKeyHex, senderPrivateKeyHex) {
    const sharedKey = ec_kcdsa_1.ECKCDSA.sharedkey(converter_1.Converter.convertHexStringToByteArray(senderPrivateKeyHex), converter_1.Converter.convertHexStringToByteArray(recipientPublicKeyHex));
    const compressedData = deflate_1.gzip(plaintext);
    const randomBytes = CryptoJS.lib.WordArray.random(SHARED_KEY_SIZE);
    const nonce = converter_1.Converter.convertWordArrayToUint8Array(randomBytes);
    const data = Uint8Array.from(encrypt(compressedData, nonce, sharedKey));
    return {
        nonce,
        data
    };
}
exports.encryptData = encryptData;
//# sourceMappingURL=encryptData.js.map