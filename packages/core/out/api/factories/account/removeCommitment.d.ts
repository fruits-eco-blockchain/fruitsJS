import { ChainService } from '../../../service/chainService';
import { TransactionId } from '../../../typings/transactionId';
import { CommitmentArgs } from '../../../typings/args/commitmentArgs';
export declare const removeCommitment: (service: ChainService) => (args: CommitmentArgs) => Promise<TransactionId>;
