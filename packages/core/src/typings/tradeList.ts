import {Trade} from './trade';

/**
 * Trade List
 * @module core
 */
export interface TradeList {
    trades: Trade[];
    requestProcessingTime: number;
}
