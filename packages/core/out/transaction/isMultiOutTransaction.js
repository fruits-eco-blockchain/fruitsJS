"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
exports.isMultiOutTransaction = (transaction) => transaction.type === constants_1.TransactionType.Payment && transaction.subtype === constants_1.TransactionPaymentSubtype.MultiOut;
//# sourceMappingURL=isMultiOutTransaction.js.map