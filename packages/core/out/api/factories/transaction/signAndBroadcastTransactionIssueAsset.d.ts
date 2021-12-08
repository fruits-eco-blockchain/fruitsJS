import { ChainService } from '../../../service';
import { UnsignedTransactionArgs } from '../../../typings/args';
import { TransactionId } from '../../../typings/transactionId';
export declare let SignAndBroadcastTransactionIssueAsset: (fruitsService: ChainService) => (unsignedTransaction: UnsignedTransactionArgs) => Promise<TransactionId>;
