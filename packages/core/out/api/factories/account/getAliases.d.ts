import { ChainService } from '../../../service/chainService';
import { AliasList } from '../../../typings/aliasList';
export declare const getAliases: (service: ChainService) => (accountId: string) => Promise<AliasList>;
