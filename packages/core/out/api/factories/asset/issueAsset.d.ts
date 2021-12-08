import { ChainService } from '../../../service/chainService';
import { TransactionId } from '../../../typings/transactionId';
import { IssueAssetArgs } from '../../../typings/args';
export declare const issueAsset: (service: ChainService) => (args: IssueAssetArgs) => Promise<TransactionId>;
