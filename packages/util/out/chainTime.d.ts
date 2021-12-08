export declare class ChainTime {
    private _chainTimestamp;
    private constructor();
    static fromChainTimestamp(timestamp: number): ChainTime;
    static fromDate(date: Date): ChainTime;
    getChainTimestamp(): number;
    setChainTimestamp(blockTimestamp: number): void;
    getEpoch(): number;
    getDate(): Date;
    setDate(date: Date): void;
    equals(chainTime: ChainTime): boolean;
    before(chainTime: ChainTime): boolean;
    after(chainTime: ChainTime): boolean;
}
