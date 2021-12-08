import { Contract } from '../contract';
import { ContractList } from '../contractList';
import { ContractIdList } from '../contractIdList';
import { PublishContractArgs } from '../args';
import { TransactionId } from '../transactionId';
import { CallContractMethodArgs } from '../args/callContractMethodArgs';
export interface ContractApi {
    getContract: (id: string) => Promise<Contract>;
    getContractsByAccount: (accountId: string) => Promise<ContractList>;
    getAllContractIds: (id: string) => Promise<ContractIdList>;
    publishContract: (args: PublishContractArgs) => Promise<TransactionId>;
    callContractMethod: (args: CallContractMethodArgs) => Promise<TransactionId>;
}
