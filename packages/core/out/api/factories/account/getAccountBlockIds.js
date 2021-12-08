"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccountBlockIds = (service) => (args) => {
    const params = {
        account: args.accountId,
        firstIndex: args.firstIndex,
        lastIndex: args.lastIndex,
        includeTransactions: args.includeTransactions || false
    };
    return service.query('getAccountBlockIds', params);
};
//# sourceMappingURL=getAccountBlockIds.js.map