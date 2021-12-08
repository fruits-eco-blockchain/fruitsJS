import { ChainService } from '../../../service/chainService';
import { TransactionId } from '../../../typings/transactionId';
import { MultioutRecipientAmount } from '../../../typings/multioutRecipientAmount';
export declare const sendAmountToMultipleRecipients: (service: ChainService) => (recipientAmounts: MultioutRecipientAmount[], feePlanck: string, senderPublicKey: string, senderPrivateKey: string, deadline?: number) => Promise<TransactionId>;
