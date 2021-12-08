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
const createParametersFromAttachment_1 = require("../../../internal/createParametersFromAttachment");
const signAndBroadcastTransaction_1 = require("../transaction/signAndBroadcastTransaction");
exports.transferAsset = (service) => (args) => __awaiter(void 0, void 0, void 0, function* () {
    const { senderPrivateKey, senderPublicKey } = args;
    let parameters = {
        asset: args.asset,
        quantityQNT: args.quantity,
        publicKey: args.senderPublicKey,
        recipient: args.recipientId,
        recipientPublicKey: args.recipientPublicKey || undefined,
        feeNQT: args.feePlanck,
        deadline: args.deadline || constants_1.DefaultDeadline
    };
    if (args.attachment) {
        parameters = createParametersFromAttachment_1.createParametersFromAttachment(args.attachment, parameters);
    }
    const { unsignedTransactionBytes: unsignedHexMessage } = yield service.send('transferAsset', parameters);
    return signAndBroadcastTransaction_1.signAndBroadcastTransaction(service)({
        senderPublicKey,
        senderPrivateKey,
        unsignedHexMessage
    });
});
//# sourceMappingURL=transferAsset.js.map