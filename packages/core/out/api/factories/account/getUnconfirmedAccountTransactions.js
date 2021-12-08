"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUnconfirmedAccountTransactions = (service) => (accountId, includeIndirect) => service.query('getUnconfirmedTransactions', {
    account: accountId,
    includeIndirect
});
//# sourceMappingURL=getUnconfirmedAccountTransactions.js.map