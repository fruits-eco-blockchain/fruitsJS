/**
 * Original work Copyright (c) 2019 Fruits Dev Team
 */

/**
 * The mighty transaction
 *
 * @module core
 * */
export interface Transaction {
    readonly senderPublicKey?: string;
    readonly signature?: string;
    readonly feeNQT?: string;
    readonly requestProcessingTime?: number;
    readonly type?: number;
    readonly confirmations?: number;
    readonly fullHash?: string;
    readonly version?: number;
    readonly ecBlockId?: string;
    readonly signatureHash?: string;
    readonly attachment?: any;
    readonly senderRS?: string;
    readonly subtype?: number;
    readonly amountNQT?: string;
    readonly sender?: string;
    readonly ecBlockHeight?: number;
    readonly block?: string;
    readonly blockTimestamp?: number;
    readonly deadline?: number;
    readonly transaction?: string;
    readonly timestamp?: number;
    readonly height?: number;
    readonly recipient?: string;
    readonly recipientRS?: string;
}

