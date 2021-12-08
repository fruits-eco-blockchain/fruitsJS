import { ChainService } from '../../../service';
import { Subscription } from '../../..';
export declare const getSubscription: (service: ChainService) => (subscriptionId: string) => Promise<Subscription>;
