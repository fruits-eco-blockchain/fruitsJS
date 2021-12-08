"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const converter_1 = require("./converter");
const decryptData_1 = require("./decryptData");
function decryptMessage(encryptedMessage, senderPublicKeyHex, recipientPrivateKeyHex) {
    if (!encryptedMessage.isText) {
        throw new Error('Encrypted message is marked as non-text. Use decryptData instead');
    }
    const encryptedData = {
        data: new Uint8Array(converter_1.Converter.convertHexStringToByteArray(encryptedMessage.data)),
        nonce: new Uint8Array(converter_1.Converter.convertHexStringToByteArray(encryptedMessage.nonce))
    };
    const decryptedBytes = decryptData_1.decryptData(encryptedData, senderPublicKeyHex, recipientPrivateKeyHex);
    return converter_1.Converter.convertByteArrayToString(decryptedBytes, 0, decryptedBytes.length);
}
exports.decryptMessage = decryptMessage;
//# sourceMappingURL=decryptMessage.js.map