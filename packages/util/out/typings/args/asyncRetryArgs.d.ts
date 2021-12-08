export interface AsyncRetryArgs<T> {
    asyncFn: () => Promise<T>;
    onFailureAsync: (e: Error, retryCount: number) => Promise<boolean>;
    maxRetrials?: number;
    retryCount?: number;
}
