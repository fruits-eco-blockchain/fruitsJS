import { ChainService } from '../../../service/chainService';
import { Block } from '../../../typings/block';
export declare const getBlockByTimestamp: (service: ChainService) => (timestamp: number, includeTransactions: boolean) => Promise<Block>;
