"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSendTransactionQRCode = (service) => (receiverId, amountNQT = 0, feeSuggestionType = 'standard', feeNQT, immutable) => service.query('generateSendTransactionQRCode', {
    receiverId,
    amountNQT,
    feeSuggestionType,
    feeNQT,
    immutable
});
//# sourceMappingURL=generateSendTransactionQRCode.js.map