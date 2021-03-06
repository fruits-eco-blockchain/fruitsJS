/**
 * Original work Copyright (c) 2019 Fruits Dev Team
 */

/**
 * Constants for transaction types
 *
 * The transaction type is part of every [[Transaction]] object
 * and used to distinguish block data. Additionally, to the transaction type
 * a subtype is sent, that specifies the kind of transaction more detailly.
 * @module core
 */
export enum TransactionType {
    /**
     * @see TransactionPaymentSubtype
     */
    Payment = 0,
    /**
     * @see TransactionArbitrarySubtype
     */
    Arbitrary,
    /**
     * @see TransactionAssetSubtype
     */
    Asset,
    /**
     * @see TransactionMarketplaceSubtype
     */
    Marketplace,
    /**
     * @see TransactionLeasingSubtype
     */
    Leasing,
    /**
     * @see TransactionMiningSubtype
     */
    Mining = 20,
    Escrow = 21,
    AT = 22,
}

