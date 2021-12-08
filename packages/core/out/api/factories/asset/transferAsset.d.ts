import { ChainService } from '../../../service/chainService';
import { TransactionId } from '../../../typings/transactionId';
import { TransferAssetArgs } from '../../../typings/args/transferAssetArgs';
export declare const transferAsset: (service: ChainService) => (args: TransferAssetArgs) => Promise<TransactionId>;
