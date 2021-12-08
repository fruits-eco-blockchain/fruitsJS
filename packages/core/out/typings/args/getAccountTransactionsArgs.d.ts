export interface GetAccountTransactionsArgs {
    accountId: string;
    timestamp?: string;
    firstIndex?: number;
    includeIndirect?: boolean;
    lastIndex?: number;
    numberOfConfirmations?: number;
    subtype?: number;
    type?: number;
}
