/**
 * Original work Copyright (c) 2021 Fruits Dev Team
 */
import { AsyncRetryArgs } from './typings';

/**
 * Utility function to retry async functions.
 *
 * @param args The argument object*
 * @module util
 */
export async function asyncRetry<T>(args: AsyncRetryArgs<T>): Promise<T> {
    const { asyncFn, onFailureAsync, retryCount = 1, maxRetrials = 20 } = args;
    try {
        return await asyncFn();
    } catch (e) {
        if (retryCount > maxRetrials) {
            throw e; // cannot recover
        }
        // @ts-ignore
        const shouldRetry = await onFailureAsync(e, retryCount);
        if (shouldRetry) {
            await asyncRetry({ asyncFn, onFailureAsync, retryCount: retryCount + 1 });
        } else {
            throw e; // rethrow most recent error
        }
    }
}

