"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.broadcastTransaction = (service) => (signedTransactionPayload) => service.send('broadcastTransaction', { transactionBytes: signedTransactionPayload });
//# sourceMappingURL=broadcastTransaction.js.map