import { MethodArgument } from '@fruitsjs/contracts';
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
