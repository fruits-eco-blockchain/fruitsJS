"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSignedTransactionBytes = (unsignedTransactionHex, signature) => unsignedTransactionHex.substr(0, 192) + signature + unsignedTransactionHex.substr(320);
//# sourceMappingURL=generateSignedTransactionBytes.js.map