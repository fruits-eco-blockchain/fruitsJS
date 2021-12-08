"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlockById = (service) => (block, includeTransactions) => service.query('getBlock', {
    block,
    includeTransactions
});
//# sourceMappingURL=getBlockById.js.map