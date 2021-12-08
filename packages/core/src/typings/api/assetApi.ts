import {Asset} from '../asset';
import {AssetList} from '../assetList';
import {CancelOrderArgs, IssueAssetArgs, PlaceOrderArgs} from '../args';
import {TransactionId} from '../transactionId';
import {TransferAssetArgs} from "../args/transferAssetArgs";
import {GetTradesArgs} from "../args/getTradesArgs";
import {TradeList} from "../tradeList";

/**
 * Asset API
 *
 * Work in progress
 *
 * @module core.api
 * */
export interface AssetApi {

    /**
     * Get asset information by its id
     * @param {string} assetId The asset id
     * @return {Promise<Asset>} The asset, if exists
     */
    getAsset: (
        assetId: string,
    ) => Promise<Asset>;


    /**
     * Get all available assets
     * @param {number?} firstIndex The first index of range to be returned (begins with 0)
     * @param {number?} lastIndex The first index of range to be returned (max is 500)
     * @return {Promise<Asset>} List of assets
     */
    getAllAssets: (
        firstIndex?: number,
        lastIndex?: number,
    ) => Promise<AssetList>;

    /**
     * Issues assets
     * @param args The argument object
     * @return The Transaction Id (as promise)
     */
    issueAsset: (args: IssueAssetArgs) => Promise<TransactionId>;

    /**
     * Transfer assets
     * @param args The argument object
     * @return The Transaction Id (as promise)
     */
    transferAsset: (args: TransferAssetArgs) => Promise<TransactionId>;

    /**
     * Place Ask Order
     * @param args The argument object
     * @return The Transaction Id (as promise)
     */
    placeAskOrder: (args: PlaceOrderArgs) => Promise<TransactionId>;

    /**
     * Place Ask Order
     * @param args The argument object
     * @return The Transaction Id (as promise)
     */
    placeBidOrder: (args: PlaceOrderArgs) => Promise<TransactionId>;

    /**
     * Cancel Ask Order
     * @param args The argument object
     * @return The Transaction Id (as promise)
     */
    cancelAskOrder: (args: CancelOrderArgs) => Promise<TransactionId>;

    /**
     * Cancel Bid Order
     * @param args The argument object
     * @return The Transaction Id (as promise)
     */
    cancelBidOrder: (args: CancelOrderArgs) => Promise<TransactionId>;

    /**
     * Get Trades
     * @param args args The argument object
     * @return List Asset Trade
     */
    getTrades: (args: GetTradesArgs) => Promise<TradeList>;

}
