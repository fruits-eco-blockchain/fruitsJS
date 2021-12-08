import { Block } from '../block';
import { BlockId } from '../blockId';
import { BlockList } from '../blockList';
export interface BlockApi {
    getBlockByTimestamp: (timestamp: number, includeTransactions: boolean) => Promise<Block>;
    getBlockByHeight: (height: number, includeTransactions: boolean) => Promise<Block>;
    getBlockById: (block: string, includeTransactions: boolean) => Promise<Block>;
    getBlockId: (height: number) => Promise<BlockId>;
    getBlocks: (firstIndex?: number, lastIndex?: number, includeTransactions?: boolean) => Promise<BlockList>;
}
