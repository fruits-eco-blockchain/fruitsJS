"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
const inflate_1 = require("pako/lib/inflate");
const ec_kcdsa_1 = require("./ec-kcdsa");
const converter_1 = require("./converter");
const IV_LENGTH = 16;
const SHARED_KEY_SIZE = 32;
function decrypt(ivCiphertext, nonce, sharedKeyOrig) {
    if (ivCiphertext.length < IV_LENGTH ||
        ivCiphertext.length % IV_LENGTH !== 0) {
        throw new Error('Invalid Ciphertext');
    }
    const sharedKey = sharedKeyOrig.slice(0);
    for (let i = 0; i < SHARED_KEY_SIZE; i++) {
        sharedKey[i] ^= nonce[i];
    }
    const key = CryptoJS.SHA256(converter_1.Converter.convertByteArrayToWordArray(sharedKey));
    const iv = converter_1.Converter.convertByteArrayToWordArray(ivCiphertext.slice(0, IV_LENGTH));
    const ciphertext = converter_1.Converter.convertByteArrayToWordArray(ivCiphertext.slice(IV_LENGTH));
    const encrypted = CryptoJS.lib.CipherParams.create({
        ciphertext: ciphertext,
        iv: iv,
        key: key
    });
    const decrypted = CryptoJS.AES.decrypt(encrypted, key, { iv });
    return converter_1.Converter.convertWordArrayToUint8Array(decrypted);
}
function decryptData(encryptedData, senderPublicKeyHex, recipientPrivateKeyHex) {
    const sharedKey = ec_kcdsa_1.ECKCDSA.sharedkey(converter_1.Converter.convertHexStringToByteArray(recipientPrivateKeyHex), converter_1.Converter.convertHexStringToByteArray(senderPublicKeyHex));
    const compressedPlaintext = decrypt(encryptedData.data, encryptedData.nonce, sharedKey);
    return inflate_1.inflate(compressedPlaintext);
}
exports.decryptData = decryptData;
//# sourceMappingURL=decryptData.js.map