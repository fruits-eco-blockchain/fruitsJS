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
const signAndBroadcastTransaction_1 = require("./signAndBroadcastTransaction");
const constants_1 = require("../../../constants");
function mountRecipientsString(recipientAmounts) {
    return recipientAmounts.map(({ amountNQT, recipient }) => `${recipient}:${amountNQT}`).join(';');
}
exports.sendAmountToMultipleRecipients = (service) => (recipientAmounts, feePlanck, senderPublicKey, senderPrivateKey, deadline = constants_1.DefaultDeadline) => __awaiter(void 0, void 0, void 0, function* () {
    if (recipientAmounts.length === 0) {
        throw new Error('No recipients given. Send ignored');
    }
    const parameters = {
        publicKey: senderPublicKey,
        recipients: mountRecipientsString(recipientAmounts),
        feeNQT: feePlanck,
        deadline
    };
    const { unsignedTransactionBytes: unsignedHexMessage } = yield service.send('sendMoneyMulti', parameters);
    return signAndBroadcastTransaction_1.signAndBroadcastTransaction(service)({
        unsignedHexMessage,
        senderPublicKey,
        senderPrivateKey
    });
});
//# sourceMappingURL=sendAmountToMultipleRecipients.js.map