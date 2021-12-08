"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccountSubscriptions = (service) => (accountId) => {
    const parameters = {
        account: accountId,
    };
    return service.query('getAccountSubscriptions', parameters);
};
//# sourceMappingURL=getAccountSubscriptions.js.map