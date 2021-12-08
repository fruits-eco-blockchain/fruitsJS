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
