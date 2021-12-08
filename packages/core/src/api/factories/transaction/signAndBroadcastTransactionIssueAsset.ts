import {ChainService} from '../../../service';
import {UnsignedTransactionArgs} from '../../../typings/args';
import {TransactionId} from '../../../typings/transactionId';
import {broadcastTransaction} from './broadcastTransaction';
import { generateSignature, generateSignedTransactionBytes, verifySignature } from '@fruitsjs/crypto';
import {boardcastTransactionIssueAsset} from './boardcastTransactionIssueAsset';

export let SignAndBroadcastTransactionIssueAsset = (fruitsService: ChainService):
    (unsignedTransaction: UnsignedTransactionArgs) => Promise<TransactionId> =>
    async (unsignedTransaction): Promise<TransactionId> => {

        const { unsignedHexMessage, senderPrivateKey, senderPublicKey } = unsignedTransaction;

        const signature = generateSignature(unsignedHexMessage, senderPrivateKey);
        if (!verifySignature(signature, unsignedHexMessage, senderPublicKey)) {
            throw new Error('The signed message could not be verified! Transaction not broadcasted!');
        }

        const signedMessage = generateSignedTransactionBytes(unsignedHexMessage, signature);
        return boardcastTransactionIssueAsset(fruitsService)(signedMessage);
    };
