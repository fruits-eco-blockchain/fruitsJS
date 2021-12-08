import { ChainService } from '../../../service/chainService';
import { BlockId } from '../../..';
export declare const getBlockId: (service: ChainService) => (height: number) => Promise<BlockId>;
