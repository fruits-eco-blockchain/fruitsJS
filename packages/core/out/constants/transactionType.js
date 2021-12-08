"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TransactionType;
(function (TransactionType) {
    TransactionType[TransactionType["Payment"] = 0] = "Payment";
    TransactionType[TransactionType["Arbitrary"] = 1] = "Arbitrary";
    TransactionType[TransactionType["Asset"] = 2] = "Asset";
    TransactionType[TransactionType["Marketplace"] = 3] = "Marketplace";
    TransactionType[TransactionType["Leasing"] = 4] = "Leasing";
    TransactionType[TransactionType["Mining"] = 20] = "Mining";
    TransactionType[TransactionType["Escrow"] = 21] = "Escrow";
    TransactionType[TransactionType["AT"] = 22] = "AT";
})(TransactionType = exports.TransactionType || (exports.TransactionType = {}));
//# sourceMappingURL=transactionType.js.map