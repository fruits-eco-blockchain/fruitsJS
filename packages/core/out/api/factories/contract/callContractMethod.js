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
const attachment_1 = require("../../../typings/attachment");
const transaction_1 = require("../transaction");
const contracts_1 = require("@fruitsjs/contracts");
exports.callContractMethod = (service) => (args) => __awaiter(void 0, void 0, void 0, function* () {
    const callMessage = contracts_1.generateMethodCall({
        methodHash: args.methodHash,
        methodArgs: args.methodArgs,
    });
    const attachment = new attachment_1.AttachmentMessage({
        message: callMessage,
        messageIsText: false,
    });
    const parameters = {
        amountPlanck: args.amountPlanck,
        attachment,
        deadline: args.deadline,
        feePlanck: args.feePlanck,
        recipientId: args.contractId,
        senderPrivateKey: args.senderPrivateKey,
        senderPublicKey: args.senderPublicKey,
    };
    return yield transaction_1.sendAmountToSingleRecipient(service)(parameters);
});
//# sourceMappingURL=callContractMethod.js.map