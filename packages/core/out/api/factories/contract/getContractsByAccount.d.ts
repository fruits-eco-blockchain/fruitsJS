import { ChainService } from '../../../service/chainService';
import { ContractList } from '../../../typings/contractList';
export declare const getContractsByAccount: (service: ChainService) => (accountId: string) => Promise<ContractList>;
