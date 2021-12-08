"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccountTransactionIds = (service) => (args) => {
    const parameters = Object.assign(Object.assign({}, args), { account: args.accountId });
    delete parameters.accountId;
    return service.query('getAccountTransactionIds', parameters);
};
//# sourceMappingURL=getAccountTransactionIds.js.map