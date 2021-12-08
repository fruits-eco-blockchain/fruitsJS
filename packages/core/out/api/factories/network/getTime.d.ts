import { ChainService } from '../../../service/chainService';
import { ChainTimestamp } from '../../../typings/chainTimestamp';
export declare const getTime: (service: ChainService) => () => Promise<ChainTimestamp>;
