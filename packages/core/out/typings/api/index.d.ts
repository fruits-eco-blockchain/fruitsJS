import { BlockApi } from './blockApi';
import { NetworkApi } from './networkApi';
import { TransactionApi } from './transactionApi';
import { MessageApi } from './messageApi';
import { AccountApi } from './accountApi';
import { AliasApi } from './aliasApi';
import { ContractApi } from './contractApi';
import { AssetApi } from './assetApi';
import { ChainService } from '../../service';
export { AccountApi, AliasApi, AssetApi, BlockApi, ContractApi, MessageApi, NetworkApi, TransactionApi, };
export declare class Api {
    readonly service: ChainService;
    readonly asset: AssetApi;
    readonly block: BlockApi;
    readonly network: NetworkApi;
    readonly transaction: TransactionApi;
    readonly message: MessageApi;
    readonly account: AccountApi;
    readonly alias: AliasApi;
    readonly contract: ContractApi;
}
