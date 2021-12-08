import { ChainService } from '../../../service/chainService';
import { TransactionId } from '../../../typings/transactionId';
import { CancelOrderArgs } from '../../../typings/args';
interface GenericCancelOrderArgs extends CancelOrderArgs {
    type: 'bid' | 'ask';
}
export declare const cancelOrder: (service: ChainService) => (args: GenericCancelOrderArgs) => Promise<TransactionId>;
export {};
