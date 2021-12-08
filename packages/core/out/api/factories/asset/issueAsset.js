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
const constants_1 = require("../../../constants");
const signAndBroadcastTransactionIssueAsset_1 = require("../transaction/signAndBroadcastTransactionIssueAsset");
exports.issueAsset = (service) => (args) => __awaiter(void 0, void 0, void 0, function* () {
    const { senderPrivateKey, senderPublicKey } = args;
    const config = { headers: { 'Content-Type': 'application/json' } };
    let parameters = {
        name: args.name,
        description: args.description,
        quantityQNT: args.quantity,
        decimals: args.decimals,
        publicKey: senderPublicKey,
        feeNQT: args.amountPlanck,
        deadline: args.deadline || constants_1.DefaultDeadline,
        encryptToSelfMessageData: args.encryptToSelfMessageData,
        encryptToSelfMessageNonce: args.encryptToSelfMessageNonce,
        messageToEncryptToSelfIsText: args.messageToEncryptToSelfIsText,
        referencedTransactionFullHash: args.referenceTransactionHash
    };
    const { unsignedTransactionBytes: unsignedHexMessage } = yield service
        .sendBodyString('issueAsset', parameters, args.icon, config);
    return signAndBroadcastTransactionIssueAsset_1.SignAndBroadcastTransactionIssueAsset(service)({
        senderPublicKey,
        senderPrivateKey,
        unsignedHexMessage
    });
});
//# sourceMappingURL=issueAsset.js.map