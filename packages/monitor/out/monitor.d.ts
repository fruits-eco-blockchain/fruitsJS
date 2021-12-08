import { MonitorArgs } from './typings/args/monitorArgs';
interface KeyArgs {
    key: string;
}
interface FulfilledArgs<T> extends KeyArgs {
    data: T;
}
declare type TimeoutFunction = (args: KeyArgs) => void;
declare type FulfilledFunction<T = any> = (args: FulfilledArgs<T>) => void;
export declare class Monitor<T> {
    private readonly _timeoutSecs;
    private readonly _asyncFetcher;
    private readonly _compareFn;
    private readonly _emitter;
    private readonly _intervalSecs;
    private readonly _key;
    private _startTime;
    private _logger;
    private _handle;
    constructor(args: MonitorArgs<T>);
    get startTime(): number;
    get intervalSecs(): number;
    get key(): string;
    get timeoutSecs(): number;
    static deserialize<T>(serializedMonitor: string, autoStart?: boolean): Monitor<T>;
    private static _serializeFunction;
    private static _deserializeFunction;
    serialize(): string;
    _debug(msg: any): void;
    _resetStartTime(): void;
    hasStarted(): boolean;
    isExpired(): boolean;
    start(): Monitor<T>;
    stop(): void;
    onTimeout(fn: TimeoutFunction): Monitor<T>;
    onFulfilled(fn: FulfilledFunction<T>): Monitor<T>;
}
export {};
