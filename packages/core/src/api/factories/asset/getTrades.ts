import {ChainService} from '../../../service/chainService';
import {GetTradesArgs} from '../../../typings/args/getTradesArgs';
import {TradeList} from '../../../typings/tradeList';

export const getTrades = (service: ChainService):
    (args: GetTradesArgs) => Promise<TradeList> =>
    (args): Promise<TradeList> => {

    const param = {
        asset: args.assetId,
        account: args.accountId,
        firstIndex: args.firstIndex,
        lastIndex: args.lastIndex,
        includeAssetInfo: args.includeAssetInfo
    };

    return service.query('getTrades', param);

};
