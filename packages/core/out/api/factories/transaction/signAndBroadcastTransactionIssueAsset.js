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
const boardcastTransactionIssueAsset_1 = require("./boardcastTransactionIssueAsset");
exports.SignAndBroadcastTransactionIssueAsset = (fruitsService) => (unsignedTransaction) => __awaiter(void 0, void 0, void 0, function* () {
    const { unsignedHexMessage, senderPrivateKey, senderPublicKey } = unsignedTransaction;
    const signature = crypto_1.generateSignature(unsignedHexMessage, senderPrivateKey);
    if (!crypto_1.verifySignature(signature, unsignedHexMessage, senderPublicKey)) {
        throw new Error('The signed message could not be verified! Transaction not broadcasted!');
    }
    const signedMessage = crypto_1.generateSignedTransactionBytes(unsignedHexMessage, signature);
    return boardcastTransactionIssueAsset_1.boardcastTransactionIssueAsset(fruitsService)(signedMessage);
});
//# sourceMappingURL=signAndBroadcastTransactionIssueAsset.js.map