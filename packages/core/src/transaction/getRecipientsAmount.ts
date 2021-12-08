import { convertNQTStringToNumber } from '@fruitsjs/util';
import { Transaction } from '../typings/transaction';
import { getRecipientAmountsFromMultiOutPayment } from './getRecipientAmountsFromMultiOutPayment';
import { isMultiOutTransaction } from './isMultiOutTransaction';
import { isMultiOutSameTransaction } from './isMultiOutSameTransaction';

/**
 * Gets the amount from a transaction, considering ordinary and multi out transactions (with same and different payments)
 * @param recipientId The numeric id of the recipient
 * @param transaction The payment transaction
 * @return the amount in FRUITS (not NQT)
 * @module core
 */
export function getRecipientsAmount(recipientId: string, transaction: Transaction): number {

    if (isMultiOutTransaction(transaction) || isMultiOutSameTransaction(transaction)) {

        const recipientAmounts = getRecipientAmountsFromMultiOutPayment(transaction);
        return recipientAmounts
            .filter(ra => ra.recipient === recipientId)
            .reduce((amount, ra) => amount + convertNQTStringToNumber(ra.amountNQT), 0);
    }

    return convertNQTStringToNumber(transaction.amountNQT);
}
