import { ChainServiceSettings } from './chainServiceSettings';
import { AxiosRequestConfig } from 'axios';
export declare class ChainService {
    constructor(settings: ChainServiceSettings);
    settings: ChainServiceSettings;
    private readonly _relPath;
    private static throwAsHttpError;
    toApiEndpoint(method: string, data?: object): string;
    query<T>(method: string, args?: any, options?: any | AxiosRequestConfig): Promise<T>;
    send<T>(method: string, args?: object, body?: object, options?: any | AxiosRequestConfig): Promise<T>;
    sendBodyString<T>(method: string, args: object, body: string, options?: any | AxiosRequestConfig): Promise<T>;
    private faultTolerantRequest;
    selectBestHost(reconfigure?: boolean, checkMethod?: string): Promise<string>;
}
