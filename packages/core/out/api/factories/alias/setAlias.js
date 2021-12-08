"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("@fruitsjs/crypto");
const crypto_2 = require("@fruitsjs/crypto");
const crypto_3 = require("@fruitsjs/crypto");
const util_1 = require("@fruitsjs/util");
const broadcastTransaction_1 = require("../transaction/broadcastTransaction");
exports.setAlias = (service) => (aliasName, aliasURI, feeNQT, senderPublicKey, senderPrivateKey, deadline) => __awaiter(void 0, void 0, void 0, function* () {
    const parameters = {
        aliasName,
        aliasURI,
        deadline: deadline,
        feeNQT: util_1.convertNumberToNQTString(parseFloat(feeNQT)),
        publicKey: senderPublicKey
    };
    const { unsignedTransactionBytes } = yield service.send('setAlias', parameters);
    const signature = crypto_1.generateSignature(unsignedTransactionBytes, senderPrivateKey);
    if (!crypto_2.verifySignature(signature, unsignedTransactionBytes, senderPublicKey)) {
        throw new Error('The signed message could not be verified! Transaction not broadcasted!');
    }
    const signedMessage = crypto_3.generateSignedTransactionBytes(unsignedTransactionBytes, signature);
    return broadcastTransaction_1.broadcastTransaction(service)(signedMessage);
});
//# sourceMappingURL=setAlias.js.map