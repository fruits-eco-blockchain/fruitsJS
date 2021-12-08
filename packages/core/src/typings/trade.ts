
/**
 * Trade
 * @module core
 */
export interface Trade {
    timestamp: string;
    quantityQNT: string;
    priceNQT: string;
    asset: string;
    askOrder: string;
    bidOrder: string;
    askOrderHeight: number;
    seller: string;
    sellerRS: string;
    buyer: string;
    buyerRS: string;
    block: string;
    height: number;
    tradeType: string;
    name: string;
    decimals: number;
}
