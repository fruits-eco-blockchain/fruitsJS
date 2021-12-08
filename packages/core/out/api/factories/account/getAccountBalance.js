"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccountBalance = (service) => (accountId) => service.query('getBalance', {
    account: accountId,
});
//# sourceMappingURL=getAccountBalance.js.map