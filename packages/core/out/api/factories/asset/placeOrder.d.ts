import { ChainService } from '../../../service/chainService';
import { TransactionId } from '../../../typings/transactionId';
import { PlaceOrderArgs } from '../../../typings/args';
interface GenericPlaceOrderArgs extends PlaceOrderArgs {
    type: 'bid' | 'ask';
}
export declare const placeOrder: (service: ChainService) => (args: GenericPlaceOrderArgs) => Promise<TransactionId>;
export {};
