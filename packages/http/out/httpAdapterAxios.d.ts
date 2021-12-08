import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from './httpResponse';
import { Http } from './http';
export declare class HttpAdapterAxios implements Http {
    private _clientImpl;
    constructor(baseURL: string, options?: AxiosRequestConfig);
    private static mountError;
    get(url: string, options?: any | AxiosRequestConfig): Promise<HttpResponse>;
    post(url: string, payload: any, options?: any | AxiosRequestConfig): Promise<HttpResponse>;
    put(url: string, payload: any, options?: any | AxiosRequestConfig): Promise<HttpResponse>;
    delete(url: string, options?: any | AxiosRequestConfig): Promise<HttpResponse>;
}
