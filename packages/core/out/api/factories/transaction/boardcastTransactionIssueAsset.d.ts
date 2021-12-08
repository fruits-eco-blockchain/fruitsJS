import { ChainService } from '../../../service';
import { TransactionId } from '../../../typings/transactionId';
export declare const boardcastTransactionIssueAsset: (service: ChainService) => (signedTransactionPayload: string) => Promise<TransactionId>;
