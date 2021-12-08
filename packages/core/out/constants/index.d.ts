import { TransactionType } from './transactionType';
import { TransactionArbitrarySubtype } from './transactionArbitrarySubtype';
import { TransactionAssetSubtype } from './transactionAssetSubtype';
import { TransactionLeasingSubtype } from './transactionLeasingSubtype';
import { TransactionMarketplaceSubtype } from './transactionMarketplaceSubtype';
import { TransactionPaymentSubtype } from './transactionPaymentSubtype';
import { TransactionMiningSubtype } from './transactionMiningSubtype';
import { TransactionEscrowSubtype } from './transactionEscrowSubtype';
import { TransactionSmartContractSubtype } from './transactionSmartContractSubtype';
declare const DefaultDeadline = 1440;
declare const DefaultApiEndpoint = "/fruits";
declare enum AddressPrefix {
    MainNet = "FRUITS",
    TestNet = "FRUITS"
}
export { AddressPrefix, DefaultDeadline, DefaultApiEndpoint, TransactionType, TransactionPaymentSubtype, TransactionMarketplaceSubtype, TransactionLeasingSubtype, TransactionAssetSubtype, TransactionArbitrarySubtype, TransactionMiningSubtype, TransactionEscrowSubtype, TransactionSmartContractSubtype };
