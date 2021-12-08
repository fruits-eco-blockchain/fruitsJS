import { ChainService } from '../../../service/chainService';
import { TransactionId } from '../../../typings/transactionId';
export declare const sendSameAmountToMultipleRecipients: (service: ChainService) => (amountPlanck: string, feePlanck: string, recipientIds: string[], senderPublicKey: string, senderPrivateKey: string, deadline?: number) => Promise<TransactionId>;
