import { ChainService } from '../../../service/chainService';
import { TransactionId } from '../../../typings/transactionId';
import { CancelSubscriptionArgs } from '../../../typings/args/cancelSubscriptionArgs';
export declare const cancelSubscription: (service: ChainService) => (args: CancelSubscriptionArgs) => Promise<TransactionId>;
