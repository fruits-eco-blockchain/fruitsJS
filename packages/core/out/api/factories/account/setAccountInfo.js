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
const signAndBroadcastTransaction_1 = require("../transaction/signAndBroadcastTransaction");
const constants_1 = require("../../../constants");
exports.setAccountInfo = (service) => (args) => __awaiter(void 0, void 0, void 0, function* () {
    const parameters = {
        name: args.name,
        description: args.description,
        deadline: constants_1.DefaultDeadline,
        feeNQT: args.feePlanck,
        publicKey: args.senderPublicKey
    };
    const { unsignedTransactionBytes: unsignedHexMessage } = yield service.send('setAccountInfo', parameters);
    return signAndBroadcastTransaction_1.signAndBroadcastTransaction(service)({
        senderPrivateKey: args.senderPrivateKey,
        senderPublicKey: args.senderPublicKey,
        unsignedHexMessage
    });
});
//# sourceMappingURL=setAccountInfo.js.map