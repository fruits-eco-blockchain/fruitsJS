/**
 * Original work Copyright (c) 2019 Fruits Dev Team
 */

/**
 * Account Balance
 *
 * @module core
 */
export interface Balance {
    readonly unconfirmedBalanceNQT: string;
    readonly guaranteedBalanceNQT: string;
    readonly effectiveBalanceNXT: string; // is really NXT!!
    readonly forgedBalanceNQT: string;
    readonly balanceNQT: string;
    readonly requestProcessingTime: number;
}
