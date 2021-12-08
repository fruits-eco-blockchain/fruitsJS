"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    constructor(data = {}) {
        this.account = data.account || undefined;
        this.accountRS = data.accountRS || undefined;
        this.accountRSExtended = data.accountRSExtended || undefined;
        this.assetBalances = data.assetBalances || undefined;
        this.balanceNQT = data.balanceNQT || 0;
        this.commitmentNQT = data.commitmentNQT || 0;
        this.committedBalanceNQT = data.committedBalanceNQT || 0;
        this.description = data.description || undefined;
        this.effectiveBalanceNQT = data.effectiveBalanceNQT || 0;
        if (data.publicKey || data.keys !== undefined) {
            this.pinHash = data.pinHash || undefined;
            this.keys = {
                publicKey: data.publicKey || data.keys.publicKey,
                signPrivateKey: data.keys.signPrivateKey,
                agreementPrivateKey: data.keys.agreementPrivateKey,
            };
        }
        this.name = data.name || undefined;
        this.selected = data.selected || false;
        if (data.transactions !== undefined && data.transactions.length > 0) {
            this.transactions = data.transactions;
        }
        else {
            this.transactions = [];
        }
        this.type = data.type || 'offline';
        this.unconfirmedAssetBalances = data.unconfirmedAssetBalances || undefined;
        this.unconfirmedBalanceNQT = data.unconfirmedBalanceNQT || 0;
        this.confirmed = data.confirmed || false;
    }
}
exports.Account = Account;
//# sourceMappingURL=account.js.map