"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlockByTimestamp = (service) => (timestamp, includeTransactions) => service.query('getBlock', {
    timestamp,
    includeTransactions
});
//# sourceMappingURL=getBlockByTimestamp.js.map