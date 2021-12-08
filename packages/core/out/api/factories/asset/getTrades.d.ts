import { ChainService } from '../../../service/chainService';
import { GetTradesArgs } from '../../../typings/args/getTradesArgs';
import { TradeList } from '../../../typings/tradeList';
export declare const getTrades: (service: ChainService) => (args: GetTradesArgs) => Promise<TradeList>;
