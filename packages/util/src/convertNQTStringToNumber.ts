/**
 * Original work Copyright (c) 2018 PoC-Consortium
 * Modified work Copyright (c) 2019 Fruits Dev Team
 */

/**
 * Helper method to convert a Planck Value (FRUITS * 1E-8) String to FRUITS number
 * @param amount The amount in Planck (aka NQT)
 * @return A number expressed in Fruits (not NQT)
 * @throws exception if argument is invalid
 * @deprecated
 * <div class="deprecated">
 *     Use [[Amount]] instead
 * </div>
 * @module util
 */
export const convertNQTStringToNumber = (amount: string): number => {

    if (amount === undefined ||
        amount === null ||
        amount === '') {
        throw new Error('Invalid argument');
    }

    return parseFloat(amount) / 100000000;
};
