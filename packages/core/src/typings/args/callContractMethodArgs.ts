import { MethodArgument } from '@fruitsjs/contracts';

/**
 * The argument object for [[ContractApi.callContractMethod]]
 *
 * @module core
 */
export interface CallContractMethodArgs {
    amountPlanck: string;
    contractId: string;
    deadline?: number;
    feePlanck: string;
    methodArgs?: MethodArgument[];
    methodHash: string;
    senderPrivateKey: string;
    senderPublicKey: string;
}
