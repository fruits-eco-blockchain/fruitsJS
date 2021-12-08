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
const contracts_1 = require("@fruitsjs/contracts");
const transaction_1 = require("../transaction");
const constants_1 = require("../../../constants");
exports.publishContract = (service) => (args) => __awaiter(void 0, void 0, void 0, function* () {
    const parameters = {
        code: args.codeHex,
        deadline: args.deadline || constants_1.DefaultDeadline,
        description: args.description,
        feeNQT: contracts_1.calculateMinimumCreationFee(args.codeHex, args.isCIP20Active).getPlanck(),
        minActivationAmountNQT: args.activationAmountPlanck,
        name: args.name,
        publicKey: args.senderPublicKey,
        cspages: 1,
        dpages: 1,
        uspages: 1,
        broadcast: true,
    };
    const { unsignedTransactionBytes: unsignedHexMessage } = yield service.send('createATProgram', parameters);
    return transaction_1.signAndBroadcastTransaction(service)({
        senderPublicKey: args.senderPublicKey,
        senderPrivateKey: args.senderPrivateKey,
        unsignedHexMessage
    });
});
//# sourceMappingURL=publishContract.js.map