import { Keys } from '@fruitsjs/crypto';
import { Transaction } from './transaction';
import { AssetBalance } from './assetBalance';
import { UnconfirmedAssetBalance } from './unconfirmedAssetBalance';
export declare class Account {
    account: string;
    accountRS: string;
    accountRSExtended: string;
    assetBalances: AssetBalance[];
    balanceNQT: string;
    description: string;
    effectiveBalanceNQT: string;
    keys: Keys;
    name: string;
    pinHash: string;
    selected: boolean;
    transactions: Transaction[];
    type: string;
    unconfirmedAssetBalances: UnconfirmedAssetBalance[];
    unconfirmedBalanceNQT: string;
    commitmentNQT: string;
    committedBalanceNQT: string;
    confirmed: boolean;
    constructor(data?: any);
}
