import { ChainService } from '../../../service/chainService';
import { Block } from '../../../typings/block';
export declare const getBlockByHeight: (service: ChainService) => (height: number, includeTransactions: boolean) => Promise<Block>;
