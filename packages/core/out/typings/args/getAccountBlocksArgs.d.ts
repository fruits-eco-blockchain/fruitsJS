export interface GetAccountBlocksArgs {
    accountId: string;
    firstIndex?: number;
    lastIndex?: number;
    includeTransactions?: boolean;
}
