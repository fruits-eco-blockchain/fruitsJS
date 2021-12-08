import { ChainService } from '../../../service/chainService';
import { ServerStatus } from '../../../typings/serverStatus';
export declare const getServerStatus: (service: ChainService) => () => Promise<ServerStatus>;
