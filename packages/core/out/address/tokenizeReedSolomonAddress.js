"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenizeReedSolomonAddress = (address) => {
    const tokens = address.split('-');
    const isExtended = tokens.length === 6;
    if (tokens.length < 5 || tokens.length > 7) {
        throw new Error(`Invalid Reed-Solomon Address Format: ${address}`);
    }
    const prefix = tokens[0];
    const extension = isExtended ? tokens[5] : '';
    const rs = `${tokens[1]}-${tokens[2]}-${tokens[3]}-${tokens[4]}-${tokens[5]}-${tokens[6]}`;
    return {
        prefix,
        rs,
        extension
    };
};
//# sourceMappingURL=tokenizeReedSolomonAddress.js.map