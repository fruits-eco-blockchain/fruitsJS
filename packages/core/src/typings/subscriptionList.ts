
/**
 * Original work Copyright (c) 2020 Fruits Dev Team
 */

import {Subscription} from './subscription';

/**
 * Subscription List
 *
 * @module core
 * */
export interface SubscriptionList {
    readonly requestProcessingTime: number;
    readonly subscriptions: Subscription[];
}
