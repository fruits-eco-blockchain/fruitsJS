interface AddressParts {
    prefix: string;
    rs: string;
    extension: string;
}
export declare const tokenizeReedSolomonAddress: (address: string) => AddressParts;
export {};
