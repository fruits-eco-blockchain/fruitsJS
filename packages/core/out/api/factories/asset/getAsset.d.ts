import { ChainService } from '../../../service/chainService';
import { Asset } from '../../../typings/asset';
export declare const getAsset: (service: ChainService) => (assetId: string) => Promise<Asset>;
