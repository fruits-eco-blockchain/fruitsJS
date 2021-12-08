import { ChainService } from '../../../service/chainService';
import { AliasList } from '../../../typings/aliasList';
export declare const getAliasById: (service: ChainService) => (aliasId: string) => Promise<AliasList>;
