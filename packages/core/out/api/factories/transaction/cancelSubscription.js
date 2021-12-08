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
const signAndBroadcastTransaction_1 = require("./signAndBroadcastTransaction");
const createParametersFromAttachment_1 = require("../../../internal/createParametersFromAttachment");
exports.cancelSubscription = (service) => (args) => __awaiter(void 0, void 0, void 0, function* () {
    let parameters = {
        subscription: args.subscriptionId,
        publicKey: args.senderPublicKey,
        feeNQT: args.feePlanck,
        deadline: args.deadline || constants_1.DefaultDeadline
    };
    if (args.attachment) {
        parameters = createParametersFromAttachment_1.createParametersFromAttachment(args.attachment, parameters);
    }
    const { unsignedTransactionBytes: unsignedHexMessage } = yield service.send('subscriptionCancel', parameters);
    return signAndBroadcastTransaction_1.signAndBroadcastTransaction(service)({
        senderPublicKey: args.senderPublicKey,
        senderPrivateKey: args.senderPrivateKey,
        unsignedHexMessage
    });
});
//# sourceMappingURL=cancelSubscription.js.map