import { ChainService } from '../../../service/chainService';
import { AliasList } from '../../../typings/aliasList';
export declare const getAliasByName: (service: ChainService) => (aliasName: string) => Promise<AliasList>;
