/**
 * Original work Copyright (c) 2019 Fruits Dev Team
 */

/**
 * Asset
 *
 * The Fruits Asset Exchange is a built-in peer-to-peer exchange integrated into the Fruits Wallet.
 * It allows fast, secure, and decentralized trading of Fruits Assets.
 * Because of its decentralized nature, there’s no need for outside organizations or agencies
 * to meddle with its affairs, resulting in improved efficiency and reduced costs.
 * @module core
 */
export interface Asset {
    account: string;
    accountRS: string;
    name: string;
    description: string;
    decimals: number;
    quantityQNT: string;
    asset: string;
    numberOfTrades: number;
    numberOfTransfers: number;
    numberOfAccounts: number;
    image?: string;
}
