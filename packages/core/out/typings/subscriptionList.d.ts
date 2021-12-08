import { Subscription } from './subscription';
export interface SubscriptionList {
    readonly requestProcessingTime: number;
    readonly subscriptions: Subscription[];
}
