"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContractsByAccount = (service) => (accountId) => service.query('getAccountATs', {
    account: accountId,
});
//# sourceMappingURL=getContractsByAccount.js.map