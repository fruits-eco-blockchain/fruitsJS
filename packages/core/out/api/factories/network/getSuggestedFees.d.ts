import { ChainService } from '../../../service/chainService';
import { SuggestedFees } from '../../../typings/suggestedFees';
export declare const getSuggestedFees: (service: ChainService) => () => Promise<SuggestedFees>;
