"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccount = (service) => (args) => {
    const params = {
        account: args.accountId,
        height: args.commitmentAtHeight,
        getCommittedAmount: args.includeCommittedAmount,
        estimateCommitment: args.includeEstimatedCommitment,
    };
    return service.query('getAccount', params);
};
//# sourceMappingURL=getAccount.js.map