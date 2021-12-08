import { ChainService } from '../../../service/chainService';
import { SubscriptionList } from '../../../typings/subscriptionList';
export declare const getSubscriptionsToAccount: (service: ChainService) => (accountId: string) => Promise<SubscriptionList>;
