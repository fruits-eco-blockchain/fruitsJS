import { ChainService } from '../../../service/chainService';
import { TransactionId } from '../../../typings/transactionId';
import { CommitmentArgs } from '../../../typings/args/commitmentArgs';
export declare const addCommitment: (service: ChainService) => (args: CommitmentArgs) => Promise<TransactionId>;
