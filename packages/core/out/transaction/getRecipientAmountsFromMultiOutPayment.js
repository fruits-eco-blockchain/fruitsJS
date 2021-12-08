"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isMultiOutSameTransaction_1 = require("./isMultiOutSameTransaction");
const isMultiOutTransaction_1 = require("./isMultiOutTransaction");
const util_1 = require("@fruitsjs/util");
function getRecipientAmountsFromMultiOutPayment(transaction) {
    if (isMultiOutSameTransaction_1.isMultiOutSameTransaction(transaction)) {
        const recipients = transaction.attachment.recipients;
        const amount = recipients.length ? util_1.convertNQTStringToNumber(transaction.amountNQT) / recipients.length : 0;
        const amountNQT = util_1.convertNumberToNQTString(amount);
        return transaction.attachment.recipients.map(recipient => ({
            recipient,
            amountNQT
        }));
    }
    if (isMultiOutTransaction_1.isMultiOutTransaction(transaction)) {
        return transaction.attachment.recipients.map(r => ({
            recipient: r[0],
            amountNQT: r[1],
        }));
    }
    throw new Error(`Transaction ${transaction.transaction} is not of type 'Multi Out Payment'`);
}
exports.getRecipientAmountsFromMultiOutPayment = getRecipientAmountsFromMultiOutPayment;
//# sourceMappingURL=getRecipientAmountsFromMultiOutPayment.js.map