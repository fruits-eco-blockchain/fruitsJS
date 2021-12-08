import { ChainService } from '../../../service';
import { PublishContractArgs } from '../../../typings/args';
import { TransactionId } from '../../../typings/transactionId';
export declare const publishContract: (service: ChainService) => (args: PublishContractArgs) => Promise<TransactionId>;
