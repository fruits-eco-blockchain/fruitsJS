export declare enum EncoderFormat {
    Text = 0,
    Hexadecimal = 1,
    Base64 = 2
}
export interface CreateDeeplinkArgs {
    domain?: string;
    action?: string;
    payload?: any;
    encoderFormat?: EncoderFormat;
}
