import { ChainService } from '../../../service/chainService';
import { BlockchainStatus } from '../../../typings/blockchainStatus';
export declare const getBlockchainStatus: (service: ChainService) => () => Promise<BlockchainStatus>;
