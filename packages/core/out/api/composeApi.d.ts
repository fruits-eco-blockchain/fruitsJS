import { Api } from '../typings/api';
import { ApiVersion } from '../constants/apiVersion';
import { AxiosRequestConfig } from 'axios';
export declare class ApiSettings {
    nodeHost: string;
    apiVersion: ApiVersion;
    reliableNodeHosts?: string[];
    httpClientOptions?: any | AxiosRequestConfig;
    constructor(nodeHost: string, apiVersion?: ApiVersion, reliableNodeHosts?: string[], httpClientOptions?: any | AxiosRequestConfig);
}
export declare function composeApi(settings: ApiSettings): Api;
