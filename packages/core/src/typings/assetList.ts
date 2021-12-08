import {Asset} from './asset';

/**
 * Original work Copyright (c) 2019 Fruits Dev Team
 */

/**
 * Asset List
 * @module core
 */
export interface AssetList {
    assets: Asset[];
    requestProcessingTime: number;
}
