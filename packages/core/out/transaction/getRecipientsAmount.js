"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("@fruitsjs/util");
const getRecipientAmountsFromMultiOutPayment_1 = require("./getRecipientAmountsFromMultiOutPayment");
const isMultiOutTransaction_1 = require("./isMultiOutTransaction");
const isMultiOutSameTransaction_1 = require("./isMultiOutSameTransaction");
function getRecipientsAmount(recipientId, transaction) {
    if (isMultiOutTransaction_1.isMultiOutTransaction(transaction) || isMultiOutSameTransaction_1.isMultiOutSameTransaction(transaction)) {
        const recipientAmounts = getRecipientAmountsFromMultiOutPayment_1.getRecipientAmountsFromMultiOutPayment(transaction);
        return recipientAmounts
            .filter(ra => ra.recipient === recipientId)
            .reduce((amount, ra) => amount + util_1.convertNQTStringToNumber(ra.amountNQT), 0);
    }
    return util_1.convertNQTStringToNumber(transaction.amountNQT);
}
exports.getRecipientsAmount = getRecipientsAmount;
//# sourceMappingURL=getRecipientsAmount.js.map