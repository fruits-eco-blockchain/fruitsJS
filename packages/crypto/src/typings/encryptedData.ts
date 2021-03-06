/**
 * Original work Copyright (c) 2019 Fruits Dev Team
 */

/**
 * The interface for encrypted raw data
 * @see [[encryptData]]
 * @module crypto
 */
export interface EncryptedData {
    data: Uint8Array;
    nonce: Uint8Array;
}
