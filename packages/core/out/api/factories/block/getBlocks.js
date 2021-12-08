"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlocks = (service) => (firstIndex, lastIndex, includeTransactions) => service.query('getBlocks', {
    firstIndex,
    lastIndex,
    includeTransactions
});
//# sourceMappingURL=getBlocks.js.map