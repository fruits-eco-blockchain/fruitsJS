export declare class Address {
    private _publicKey;
    private _numericId;
    private _rs;
    private constructor();
    static create(anyValidAddress: string, prefix?: string): Address;
    static fromNumericId(numericId: string, prefix?: string): Address;
    static fromPublicKey(publicKey: string, prefix?: string): Address;
    static fromReedSolomonAddress(address: string): Address;
    getPublicKey(): string;
    getNumericId(): string;
    getReedSolomonAddress(withPrefix?: boolean): string;
    getReedSolomonAddressExtended(withPrefix?: boolean): string;
    equals(address: Address): boolean;
    private constructFromPublicKey;
    private constructFromAddress;
}
