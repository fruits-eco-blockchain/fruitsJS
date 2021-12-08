import {Block} from './block';

/**
 * Original work Copyright (c) 2020 Fruits Dev Team
 */

/**
 * Block List
 * @module core
 */
export interface BlockList {
    blocks: Block[];
    requestProcessingTime: number;
}
