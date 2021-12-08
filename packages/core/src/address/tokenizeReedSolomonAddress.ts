/**
 * Original work Copyright (c) 2021 Fruit Eco Blockchain
 */

interface AddressParts {
    prefix: string;
    rs: string;
    extension: string;
}

/**
 * @internal
 * Tokenizes a Reed-Solomon address
 * @param address The address in Reed-Solomon format
 * @return object with prefix, address and eventual extension
 * @throws Error in case of invalid format
 * @module core
 */
export const tokenizeReedSolomonAddress = (address: string): AddressParts => {
    const tokens = address.split('-');

    const isExtended = tokens.length === 6;

    if (tokens.length < 5 || tokens.length > 7) {
        throw new Error(`Invalid Reed-Solomon Address Format: ${address}`);
    }

    const prefix = tokens[0];
    const extension = isExtended ? tokens[5] : '';
    const rs = `${tokens[1]}-${tokens[2]}-${tokens[3]}-${tokens[4]}-${tokens[5]}-${tokens[6]}`;

    return {
        prefix,
        rs,
        extension
    };

};
