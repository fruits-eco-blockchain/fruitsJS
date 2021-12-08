import { ChainService } from '../../../service/chainService';
import { TransactionId } from '../../../typings/transactionId';
import { SetAccountInfoArgs } from '../../../typings/args/setAccountInfoArgs';
export declare const setAccountInfo: (service: ChainService) => (args: SetAccountInfoArgs) => Promise<TransactionId>;
