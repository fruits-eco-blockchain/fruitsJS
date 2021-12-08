import { TransactionList } from '../transactionList';
import { SubscriptionList } from '../subscriptionList';
import { UnconfirmedTransactionList } from '../unconfirmedTransactionList';
import { Balance } from '../balance';
import { AliasList } from '../aliasList';
import { Account } from '../account';
import { TransactionId } from '../transactionId';
import { CommitmentArgs, GetAccountBlocksArgs, GetAccountTransactionsArgs } from '../args';
import { SetRewardRecipientArgs } from '../args/setRewardRecipientArgs';
import { RewardRecipient } from '../rewardRecipient';
import { GetAccountArgs } from '../args/getAccountArgs';
import { BlockList } from '../blockList';
import { SetAccountInfoArgs } from '../args/setAccountInfoArgs';
import { TransactionIdList } from '../transactionIdList';
export interface AccountApi {
    getAccountTransactions: (args: GetAccountTransactionsArgs) => Promise<TransactionList>;
    getAccountTransactionIds: (args: GetAccountTransactionsArgs) => Promise<TransactionIdList>;
    getUnconfirmedAccountTransactions: (accountId: string, includeIndirect?: boolean) => Promise<UnconfirmedTransactionList>;
    getAccountBalance: (accountId: string) => Promise<Balance>;
    getAccount: (args: GetAccountArgs) => Promise<Account>;
    getAccountBlocks: (args: GetAccountBlocksArgs) => Promise<BlockList>;
    getAccountBlockIds: (args: GetAccountBlocksArgs) => Promise<string[]>;
    generateSendTransactionQRCode: (receiverId: string, amountNQT?: number, feeSuggestionType?: string, feeNQT?: number, immutable?: boolean) => Promise<ArrayBufferLike>;
    generateSendTransactionQRCodeAddress: (receiverId: string, amountNQT?: number, feeSuggestionType?: string, feeNQT?: number, immutable?: boolean) => Promise<string>;
    getAliases: (accountId: string) => Promise<AliasList>;
    setAlias: (aliasName: string, aliasURI: string, feeNQT: string, senderPublicKey: string, senderPrivateKey: string, deadline?: number) => Promise<TransactionId>;
    setAccountInfo: (args: SetAccountInfoArgs) => Promise<TransactionId>;
    setRewardRecipient: (args: SetRewardRecipientArgs) => Promise<TransactionId>;
    getAccountSubscriptions: (accountId: string) => Promise<SubscriptionList>;
    getSubscriptionsToAccount: (accountId: string) => Promise<SubscriptionList>;
    getRewardRecipient: (accountId: string) => Promise<RewardRecipient>;
    addCommitment: (args: CommitmentArgs) => Promise<TransactionId>;
    removeCommitment: (args: CommitmentArgs) => Promise<TransactionId>;
}