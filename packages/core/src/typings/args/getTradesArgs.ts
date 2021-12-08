/**
 * The argument object for [[AssetApi.getTrades]]
 *
 * @module core
 */
export interface GetTradesArgs {
    assetId: string;
    accountId: string;
    firstIndex: number;
    lastIndex: number;
    includeAssetInfo?: any;
}
