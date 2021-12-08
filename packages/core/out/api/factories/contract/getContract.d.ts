import { ChainService } from '../../../service/chainService';
import { Contract } from '../../../typings/contract';
export declare const getContract: (service: ChainService) => (id: string) => Promise<Contract>;
