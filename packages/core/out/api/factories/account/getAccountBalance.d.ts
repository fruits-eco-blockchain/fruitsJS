import { ChainService } from '../../../service/chainService';
import { Balance } from '../../../typings/balance';
export declare const getAccountBalance: (service: ChainService) => (accountId: string) => Promise<Balance>;
