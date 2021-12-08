import { ChainService } from '../../../service/chainService';
import { Account } from '../../../typings/account';
import { GetAccountArgs } from '../../../typings/args/getAccountArgs';
export declare const getAccount: (service: ChainService) => (args: GetAccountArgs) => Promise<Account>;
