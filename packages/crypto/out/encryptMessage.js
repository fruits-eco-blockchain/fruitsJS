"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const converter_1 = require("./converter");
const encryptData_1 = require("./encryptData");
function encryptMessage(plaintext, recipientPublicKeyHex, senderPrivateKeyHex) {
    const data = new Uint8Array(converter_1.Converter.convertStringToByteArray(plaintext));
    const encryptedData = encryptData_1.encryptData(data, recipientPublicKeyHex, senderPrivateKeyHex);
    return {
        data: converter_1.Converter.convertByteArrayToHexString(encryptedData.data),
        nonce: converter_1.Converter.convertByteArrayToHexString(encryptedData.nonce),
        isText: true,
    };
}
exports.encryptMessage = encryptMessage;
//# sourceMappingURL=encryptMessage.js.map