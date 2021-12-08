import { ChainService } from '../../../service/chainService';
import { SubscriptionList } from '../../../typings/subscriptionList';
export declare const getAccountSubscriptions: (service: ChainService) => (accountId: string) => Promise<SubscriptionList>;
