import { Api } from '../typings/api';
import { ChainService } from '../service';
export declare class ApiComposer {
    private service;
    private readonly api;
    static create(service: ChainService): ApiComposer;
    private constructor();
    private mapCreators;
    withBlockApi(creatorMap: any): ApiComposer;
    withAccountApi(creatorMap: any): ApiComposer;
    withNetworkApi(creatorMap: any): ApiComposer;
    withMessageApi(creatorMap: any): ApiComposer;
    withTransactionApi(creatorMap: any): ApiComposer;
    withAliasApi(creatorMap: any): ApiComposer;
    withAssetApi(creatorMap: any): ApiComposer;
    withContractApi(creatorMap: any): ApiComposer;
    compose(): Api;
}
