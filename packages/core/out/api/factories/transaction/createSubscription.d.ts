import { ChainService } from '../../../service/chainService';
import { TransactionId } from '../../../typings/transactionId';
import { CreateSubscriptionArgs } from '../../../typings/args';
export declare const createSubscription: (service: ChainService) => (args: CreateSubscriptionArgs) => Promise<TransactionId>;
