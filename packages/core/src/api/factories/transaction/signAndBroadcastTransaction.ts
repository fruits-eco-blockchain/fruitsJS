/**
 * Copyright (c) 2019 Fruits Dev Team
 */

import { generateSignature, generateSignedTransactionBytes, verifySignature } from '@fruitsjs/crypto';
import { broadcastTransaction } from './broadcastTransaction';
import { ChainService } from '../../../service';
import { TransactionId } from '../../../typings/transactionId';
import { UnsignedTransactionArgs } from '../../../typings/args/unsignedTransactionArgs';


/**
 * Use with [[ApiComposer]] and belongs to [[TransactionApi]].
 *
 * See details at [[TransactionApi.signAndBroadcastTransaction]]
 * @module core.api.factories
 */
export let signAndBroadcastTransaction = (fruitsService: ChainService):
    (unsignedTransaction: UnsignedTransactionArgs) => Promise<TransactionId> =>
    async (unsignedTransaction): Promise<TransactionId> => {

        const { unsignedHexMessage, senderPrivateKey, senderPublicKey } = unsignedTransaction;

        const signature = generateSignature(unsignedHexMessage, senderPrivateKey);
        if (!verifySignature(signature, unsignedHexMessage, senderPublicKey)) {
            throw new Error('The signed message could not be verified! Transaction not broadcasted!');
        }

        const signedMessage = generateSignedTransactionBytes(unsignedHexMessage, signature);
        return broadcastTransaction(fruitsService)(signedMessage);
    };

