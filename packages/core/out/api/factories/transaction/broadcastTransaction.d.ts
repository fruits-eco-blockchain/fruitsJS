import { ChainService } from '../../../service/chainService';
import { TransactionId } from '../../../typings/transactionId';
export declare const broadcastTransaction: (service: ChainService) => (signedTransactionPayload: string) => Promise<TransactionId>;
