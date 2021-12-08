"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSubscriptionsToAccount = (service) => (accountId) => {
    const parameters = {
        account: accountId,
    };
    return service.query('getSubscriptionsToAccount', parameters);
};
//# sourceMappingURL=getSubscriptionsToAccount.js.map