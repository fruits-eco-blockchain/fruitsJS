import { Trade } from './trade';
export interface TradeList {
    trades: Trade[];
    requestProcessingTime: number;
}
