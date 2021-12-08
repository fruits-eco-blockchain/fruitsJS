import { HttpResponse } from './httpResponse';
export interface Http {
    get(url: string, options?: any): Promise<HttpResponse>;
    post(url: string, payload: any, options?: any): Promise<HttpResponse>;
    put(url: string, payload: any, options?: any): Promise<HttpResponse>;
    delete(url: string, options?: any): Promise<HttpResponse>;
}
