"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSendTransactionQRCodeAddress = (service) => (receiverId, amountNQT = 0, feeSuggestionType = 'standard', feeNQT, immutable) => Promise.resolve(service.toApiEndpoint('generateSendTransactionQRCode', {
    receiverId: receiverId,
    amountNQT,
    feeSuggestionType,
    feeNQT,
    immutable
}));
//# sourceMappingURL=generateSendTransactionQRCodeAddress.js.map