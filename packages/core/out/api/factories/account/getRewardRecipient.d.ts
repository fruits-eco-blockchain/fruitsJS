import { ChainService } from '../../../service';
import { RewardRecipient } from '../../..';
export declare const getRewardRecipient: (service: ChainService) => (accountId: string) => Promise<RewardRecipient>;
