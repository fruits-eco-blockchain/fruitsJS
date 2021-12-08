"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tokenizeReedSolomonAddress_1 = require("./tokenizeReedSolomonAddress");
const internal_1 = require("./internal");
exports.ensureReedSolomonAddress = (address) => {
    const tokens = tokenizeReedSolomonAddress_1.tokenizeReedSolomonAddress(address);
    if (!internal_1.isDeeplyValidAddress(tokens.rs)) {
        throw new Error(`Invalid Reed-Solomon Address: ${address}`);
    }
};
//# sourceMappingURL=ensureReedSolomonAddress.js.map