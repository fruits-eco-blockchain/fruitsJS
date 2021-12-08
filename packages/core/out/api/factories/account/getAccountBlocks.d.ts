import { ChainService } from '../../../service/chainService';
import { BlockList } from '../../../typings/blockList';
import { GetAccountBlocksArgs } from '../../../typings/args/getAccountBlocksArgs';
export declare const getAccountBlocks: (service: ChainService) => (args: GetAccountBlocksArgs) => Promise<BlockList>;
