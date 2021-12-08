/**
 * Copyright (c) 2019 Fruits Dev Team
 */
import { ChainService } from '../../../service/chainService';
import { TransactionId } from '../../../typings/transactionId';
import { TransactionResponse } from '../../../typings/transactionResponse';
import { generateSignature } from '@fruitsjs/crypto';
import { verifySignature } from '@fruitsjs/crypto';
import { generateSignedTransactionBytes } from '@fruitsjs/crypto';
import { convertNumberToNQTString } from '@fruitsjs/util';
import { broadcastTransaction } from '../transaction/broadcastTransaction';

/**
 * Use with [[ApiComposer]] and belongs to [[AliasApi]].
 *
 * See details at [[AliasApi.setAlias]]
 * @module core.api.factories
 */
export const setAlias = (service: ChainService): (
    aliasName: string,
    aliasURI: string,
    feeNQT: string,
    senderPublicKey: string,
    senderPrivateKey: string,
    deadline: number,
) => Promise<TransactionId> =>
    async (
        aliasName: string,
        aliasURI: string,
        feeNQT: string,
        senderPublicKey: string,
        senderPrivateKey: string,
        deadline: number,
    ): Promise<TransactionId> => {

        const parameters = {
            aliasName,
            aliasURI,
            deadline: deadline,
            feeNQT: convertNumberToNQTString(parseFloat(feeNQT)),
            publicKey: senderPublicKey
        };
        const { unsignedTransactionBytes } = await service.send<TransactionResponse>('setAlias', parameters);
        const signature = generateSignature(unsignedTransactionBytes, senderPrivateKey);
        if (!verifySignature(signature, unsignedTransactionBytes, senderPublicKey)) {
            throw new Error('The signed message could not be verified! Transaction not broadcasted!');
        }

        const signedMessage = generateSignedTransactionBytes(unsignedTransactionBytes, signature);
        return broadcastTransaction(service)(signedMessage);

    };
