import { ChainService } from '../../../service/chainService';
import { ContractIdList } from '../../../typings/contractIdList';
export declare const getAllContractIds: (service: ChainService) => () => Promise<ContractIdList>;
