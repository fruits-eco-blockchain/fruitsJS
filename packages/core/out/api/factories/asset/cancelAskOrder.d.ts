import { ChainService } from '../../../service/chainService';
import { TransactionId } from '../../../typings/transactionId';
import { CancelOrderArgs } from '../../../typings/args';
export declare const cancelAskOrder: (service: ChainService) => (args: CancelOrderArgs) => Promise<TransactionId>;
