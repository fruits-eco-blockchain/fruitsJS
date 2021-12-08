import { ChainService } from '../../../service';
import { TransactionId } from '../../../typings/transactionId';
import { UnsignedTransactionArgs } from '../../../typings/args/unsignedTransactionArgs';
export declare let signAndBroadcastTransaction: (fruitsService: ChainService) => (unsignedTransaction: UnsignedTransactionArgs) => Promise<TransactionId>;
