import { ChainService } from '../../../service/chainService';
import { TransactionId } from '../../../typings/transactionId';
import { SetRewardRecipientArgs } from '../../../typings/args/setRewardRecipientArgs';
export declare const setRewardRecipient: (service: ChainService) => (args: SetRewardRecipientArgs) => Promise<TransactionId>;
