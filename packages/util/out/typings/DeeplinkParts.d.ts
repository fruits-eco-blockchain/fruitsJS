export interface DeeplinkParts {
    domain?: string;
    version: string;
    action?: string;
    payload?: string;
    decodedPayload?: object | string;
}
