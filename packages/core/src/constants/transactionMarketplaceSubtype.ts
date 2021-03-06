/**
 * Original work Copyright (c) 2019 Fruits Dev Team
 */

/**
 * Constants for marketplace subtypes
 *
 * @module core
 */
export enum TransactionMarketplaceSubtype {
    MarketplaceListing = 0,
    MarketplaceRemoval,
    MarketplaceItemPriceChange,
    MarketplaceItemQuantityChange,
    MarketplacePurchase,
    MarketplaceDelivery,
    MarketplaceFeedback,
    MarketplaceRefund
}

