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
const crypto_1 = require("@fruitsjs/crypto");
const signAndBroadcastTransaction_1 = require("../transaction/signAndBroadcastTransaction");
const MAX_MESSAGE_LENGTH = 1024;
exports.sendEncryptedMessage = (service) => (args) => __awaiter(void 0, void 0, void 0, function* () {
    const encryptedMessage = crypto_1.encryptMessage(args.message, args.recipientPublicKey, args.senderKeys.agreementPrivateKey);
    if (encryptedMessage.data.length > MAX_MESSAGE_LENGTH) {
        throw new Error(`The encrypted message exceeds allowed limit of ${MAX_MESSAGE_LENGTH} bytes`);
    }
    const parameters = {
        deadline: args.deadline || constants_1.DefaultDeadline,
        encryptedMessageData: encryptedMessage.data,
        encryptedMessageNonce: encryptedMessage.nonce,
        feeNQT: args.feePlanck,
        messageToEncryptIsText: true,
        publicKey: args.senderKeys.publicKey,
        recipient: args.recipientId,
        recipientPublicKey: args.recipientPublicKey || undefined,
    };
    const { unsignedTransactionBytes: unsignedHexMessage } = yield service.send('sendMessage', parameters);
    return signAndBroadcastTransaction_1.signAndBroadcastTransaction(service)({
        senderPublicKey: args.senderKeys.publicKey,
        senderPrivateKey: args.senderKeys.signPrivateKey,
        unsignedHexMessage
    });
});
//# sourceMappingURL=sendEncryptedMessage.js.map