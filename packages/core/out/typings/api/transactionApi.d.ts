import { TransactionId } from '../transactionId';
import { Transaction } from '../transaction';
import { MultioutRecipientAmount } from '../multioutRecipientAmount';
import { Subscription } from '../subscription';
import { UnconfirmedTransactionList } from '../unconfirmedTransactionList';
import { CancelSubscriptionArgs, CreateSubscriptionArgs, SendAmountArgs, UnsignedTransactionArgs } from '../args';
export interface TransactionApi {
    broadcastTransaction: (signedTransactionPayload: string) => Promise<TransactionId>;
    getTransaction: (transactionId: string) => Promise<Transaction>;
    sendSameAmountToMultipleRecipients: (amountPlanck: string, feePlanck: string, recipientIds: string[], senderPublicKey: string, senderPrivateKey: string) => Promise<TransactionId>;
    sendAmountToMultipleRecipients: (recipientAmounts: MultioutRecipientAmount[], feePlanck: string, senderPublicKey: string, senderPrivateKey: string) => Promise<TransactionId>;
    sendAmountToSingleRecipient: (args: SendAmountArgs) => Promise<TransactionId>;
    getSubscription: (subscriptionId: string) => Promise<Subscription>;
    createSubscription: (args: CreateSubscriptionArgs) => Promise<TransactionId>;
    cancelSubscription: (args: CancelSubscriptionArgs) => Promise<TransactionId>;
    getUnconfirmedTransactions: () => Promise<UnconfirmedTransactionList>;
    signAndBroadcastTransaction: (unsignedTransaction: UnsignedTransactionArgs) => Promise<TransactionId>;
}
