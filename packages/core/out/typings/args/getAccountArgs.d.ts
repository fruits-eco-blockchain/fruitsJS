export interface GetAccountArgs {
    accountId: string;
    commitmentAtHeight?: number;
    includeCommittedAmount?: boolean;
    includeEstimatedCommitment?: boolean;
}
