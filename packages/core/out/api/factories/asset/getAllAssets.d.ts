import { ChainService } from '../../../service';
import { AssetList } from '../../../typings/assetList';
export declare const getAllAssets: (service: ChainService) => (firstIndex?: number, lastIndex?: number) => Promise<AssetList>;
