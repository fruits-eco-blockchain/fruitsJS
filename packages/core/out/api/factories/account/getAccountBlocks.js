"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccountBlocks = (service) => (args) => {
    const params = {
        account: args.accountId,
        firstIndex: args.firstIndex,
        lastIndex: args.lastIndex,
        includeTransactions: args.includeTransactions || false
    };
    return service.query('getAccountBlocks', params);
};
//# sourceMappingURL=getAccountBlocks.js.map