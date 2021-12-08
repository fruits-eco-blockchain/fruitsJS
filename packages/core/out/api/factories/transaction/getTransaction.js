"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransaction = (service) => (transactionId) => service.query('getTransaction', { transaction: transactionId });
//# sourceMappingURL=getTransaction.js.map