import { Http } from '@fruitsjs/http';
import { AxiosRequestConfig } from 'axios';
export interface ChainServiceSettings {
    readonly nodeHost: string;
    readonly reliableNodeHosts?: string[];
    readonly apiRootUrl?: string;
    readonly httpClientOptions?: any | AxiosRequestConfig;
    readonly httpClient?: Http;
}
