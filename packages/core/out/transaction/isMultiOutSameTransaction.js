"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
exports.isMultiOutSameTransaction = (transaction) => transaction.type === constants_1.TransactionType.Payment && transaction.subtype === constants_1.TransactionPaymentSubtype.MultiOutSameAmount;
//# sourceMappingURL=isMultiOutSameTransaction.js.map