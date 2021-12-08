"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTrades = (service) => (args) => {
    const param = {
        asset: args.assetId,
        account: args.accountId,
        firstIndex: args.firstIndex,
        lastIndex: args.lastIndex,
        includeAssetInfo: args.includeAssetInfo
    };
    return service.query('getTrades', param);
};
//# sourceMappingURL=getTrades.js.map