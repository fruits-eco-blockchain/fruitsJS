import { ChainService } from '../../../service/chainService';
import { BlockIdList } from '../../../typings/blockIdList';
import { GetAccountBlocksArgs } from '../../../typings/args/getAccountBlocksArgs';
export declare const getAccountBlockIds: (service: ChainService) => (args: GetAccountBlocksArgs) => Promise<BlockIdList>;
