import { generateMasterKeys, getAccountIdFromPublicKey } from '@fruitsjs/crypto';

export const getAccountIdFromPassphrase = (passphrase: string): string => {
    const { publicKey } = generateMasterKeys(passphrase);
    return getAccountIdFromPublicKey(publicKey);
};

