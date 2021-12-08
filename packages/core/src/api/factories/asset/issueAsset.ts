/**
 * Copyright (c) 2020 Fruits Dev Team
 */
import {ChainService} from '../../../service/chainService';
import {TransactionId} from '../../../typings/transactionId';
import {TransactionResponse} from '../../../typings/transactionResponse';
import {DefaultDeadline} from '../../../constants';
import {createParametersFromAttachment} from '../../../internal/createParametersFromAttachment';
import {IssueAssetArgs} from '../../../typings/args';
import {signAndBroadcastTransaction} from '../transaction/signAndBroadcastTransaction';
import any = jasmine.any;
import {SignAndBroadcastTransactionIssueAsset} from "../transaction/signAndBroadcastTransactionIssueAsset";
import {AxiosRequestConfig} from "axios";

/**
 *
 * Use with [[ApiComposer]] and belongs to [[AssetApi]].
 *
 * See details at [[AssetApi.issueAsset]]
 * @module core.api.factories
 *
 */
export const issueAsset = (service: ChainService):
    (args: IssueAssetArgs) => Promise<TransactionId> =>
    async (args: IssueAssetArgs): Promise<TransactionId> => {

        const {senderPrivateKey, senderPublicKey} = args;
        const config: AxiosRequestConfig = {headers: {'Content-Type': 'application/json'}};

        let parameters = {
            name: args.name,
            description: args.description,
            quantityQNT: args.quantity,
            decimals: args.decimals,
            publicKey: senderPublicKey,
            feeNQT: args.amountPlanck,
            deadline: args.deadline || DefaultDeadline,
            encryptToSelfMessageData: args.encryptToSelfMessageData,
            encryptToSelfMessageNonce: args.encryptToSelfMessageNonce,
            messageToEncryptToSelfIsText: args.messageToEncryptToSelfIsText,
            referencedTransactionFullHash: args.referenceTransactionHash
        };

        const {unsignedTransactionBytes: unsignedHexMessage} = await service
            .sendBodyString<TransactionResponse>('issueAsset', parameters, args.icon, config);

        return SignAndBroadcastTransactionIssueAsset(service)({
            senderPublicKey,
            senderPrivateKey,
            unsignedHexMessage
        });

    };
