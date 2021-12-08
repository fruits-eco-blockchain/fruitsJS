"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlockByHeight = (service) => (height, includeTransactions) => service.query('getBlock', {
    height,
    includeTransactions
});
//# sourceMappingURL=getBlockByHeight.js.map