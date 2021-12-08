import { Asset } from '../asset';
import { AssetList } from '../assetList';
import { CancelOrderArgs, IssueAssetArgs, PlaceOrderArgs } from '../args';
import { TransactionId } from '../transactionId';
import { TransferAssetArgs } from "../args/transferAssetArgs";
import { GetTradesArgs } from "../args/getTradesArgs";
import { TradeList } from "../tradeList";
export interface AssetApi {
    getAsset: (assetId: string) => Promise<Asset>;
    getAllAssets: (firstIndex?: number, lastIndex?: number) => Promise<AssetList>;
    issueAsset: (args: IssueAssetArgs) => Promise<TransactionId>;
    transferAsset: (args: TransferAssetArgs) => Promise<TransactionId>;
    placeAskOrder: (args: PlaceOrderArgs) => Promise<TransactionId>;
    placeBidOrder: (args: PlaceOrderArgs) => Promise<TransactionId>;
    cancelAskOrder: (args: CancelOrderArgs) => Promise<TransactionId>;
    cancelBidOrder: (args: CancelOrderArgs) => Promise<TransactionId>;
    getTrades: (args: GetTradesArgs) => Promise<TradeList>;
}
