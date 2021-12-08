import { ChainService } from '../../../service/chainService';
import { Peer } from '../../../typings/peer';
export declare const getPeer: (service: ChainService) => (peer: string) => Promise<Peer>;
