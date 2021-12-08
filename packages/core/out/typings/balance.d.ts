export interface Balance {
    readonly unconfirmedBalanceNQT: string;
    readonly guaranteedBalanceNQT: string;
    readonly effectiveBalanceNXT: string;
    readonly forgedBalanceNQT: string;
    readonly balanceNQT: string;
    readonly requestProcessingTime: number;
}
