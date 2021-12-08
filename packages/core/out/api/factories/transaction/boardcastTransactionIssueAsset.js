"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = { headers: { 'Content-Type': 'application/json' } };
exports.boardcastTransactionIssueAsset = (service) => (signedTransactionPayload) => service.sendBodyString('broadcastTransaction', {}, signedTransactionPayload, config);
//# sourceMappingURL=boardcastTransactionIssueAsset.js.map