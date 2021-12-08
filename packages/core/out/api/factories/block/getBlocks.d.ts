import { ChainService } from '../../../service/chainService';
import { BlockList } from '../../../typings/blockList';
export declare const getBlocks: (service: ChainService) => (firstIndex?: number, lastIndex?: number, includeTransactions?: boolean) => Promise<BlockList>;
