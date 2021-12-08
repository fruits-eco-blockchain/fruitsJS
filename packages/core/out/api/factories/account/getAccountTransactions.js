"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccountTransactions = (service) => (args) => {
    const parameters = Object.assign(Object.assign({}, args), { account: args.accountId });
    delete parameters.accountId;
    return service.query('getAccountTransactions', parameters);
};
//# sourceMappingURL=getAccountTransactions.js.map