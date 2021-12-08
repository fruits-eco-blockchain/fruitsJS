"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAliases = (service) => (accountId) => service.query('getAliases', {
    account: accountId,
});
//# sourceMappingURL=getAliases.js.map