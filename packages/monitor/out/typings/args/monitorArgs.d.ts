import { Logger } from '../logger';
export declare type MonitorFetchFunction<T = any> = () => Promise<T>;
export declare type MonitorPredicateFunction<T = any> = (fetchData: T) => boolean;
export interface MonitorArgs<T> {
    key: string;
    intervalSecs: number;
    timeoutSecs: number;
    logger?: Logger;
    asyncFetcherFn: MonitorFetchFunction<T>;
    compareFn: MonitorPredicateFunction<T>;
}
