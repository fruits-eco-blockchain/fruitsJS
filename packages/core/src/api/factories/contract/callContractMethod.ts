/**
 * Copyright (c) 2019 Fruits Dev Team
 */
import { ChainService } from '../../../service';
import { CallContractMethodArgs, SendAmountArgs } from '../../../typings/args';
import { TransactionId } from '../../../typings/transactionId';
import { AttachmentMessage } from '../../../typings/attachment';
import { sendAmountToSingleRecipient } from '../transaction';
import { generateMethodCall } from '@fruitsjs/contracts';


/**
 * Use with [[ApiComposer]] and belongs to [[ContractApi]].
 *
 * See details at [[ContractApi.callContractMethod]]
 * @module core.api.factories
 */
export const callContractMethod = (service: ChainService):
    (args: CallContractMethodArgs) => Promise<TransactionId> =>
    async (args: CallContractMethodArgs): Promise<TransactionId> => {

        const callMessage = generateMethodCall({
            methodHash: args.methodHash,
            methodArgs: args.methodArgs,
        });

        const attachment = new AttachmentMessage({
            message: callMessage,
            messageIsText: false,
        });

        const parameters: SendAmountArgs = {
            amountPlanck: args.amountPlanck,
            attachment,
            deadline: args.deadline,
            feePlanck: args.feePlanck,
            recipientId: args.contractId,
            senderPrivateKey: args.senderPrivateKey,
            senderPublicKey: args.senderPublicKey,
        };

        return await sendAmountToSingleRecipient(service)(parameters);

    };
