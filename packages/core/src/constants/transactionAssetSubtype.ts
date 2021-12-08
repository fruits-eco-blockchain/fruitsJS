/**
 * Original work Copyright (c) 2019 Fruits Dev Team
 */

/**
 * Constants for asset subtypes
 * @module core
 *
 */
export enum TransactionAssetSubtype {
    AssetIssuance = 0,
    AssetTransfer,
    AskOrderPlacement,
    BidOrderPlacement,
    AskOrderCancellation,
    BidOrderCancellation,
    NewAssetInsurance = 7
}

