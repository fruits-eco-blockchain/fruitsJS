import { ChainService } from '../../../service/chainService';
import { Block } from '../../../typings/block';
export declare const getBlockById: (service: ChainService) => (block: string, includeTransactions: boolean) => Promise<Block>;
