/**
 * Modified work Copyright (c) 2019 Fruits Dev Team
 */
import {ChainService} from '../../../service/chainService';
import {Asset} from '../../../typings/asset';

/**
 * Use with [[ApiComposer]] and belongs to [[AssetApi]].
 *
 * See details at [[AssetApi.getAsset]]
 * @module core.api.factories
 * */
export const getAsset = (service: ChainService):
    (assetId: string) => Promise<Asset> =>
    (assetId: string): Promise<Asset> =>
        service.query('getAsset', {asset: assetId});
