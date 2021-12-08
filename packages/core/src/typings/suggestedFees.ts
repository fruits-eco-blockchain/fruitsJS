/**
 * Original work Copyright (c) 2019 Fruits Dev Team
 */

/**
 * Suggested fees (in Planck)
 * @module core
 * */
export interface SuggestedFees {
    minimum: number;
    standard: number;
    cheap: number;
    priority: number;
    requestProcessingTime: number;
}
