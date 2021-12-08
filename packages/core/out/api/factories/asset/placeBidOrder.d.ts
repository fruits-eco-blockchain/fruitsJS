import { ChainService } from '../../../service/chainService';
import { TransactionId } from '../../../typings/transactionId';
import { PlaceOrderArgs } from '../../../typings/args';
export declare const placeBidOrder: (service: ChainService) => (args: PlaceOrderArgs) => Promise<TransactionId>;
