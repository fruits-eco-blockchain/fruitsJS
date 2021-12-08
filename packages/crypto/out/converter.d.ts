export declare class Converter {
    static convertHexStringToByteArray(hex: any): number[];
    static convertByteArrayToHexString(bytes: any): string;
    static convertStringToByteArray(str: any): any[];
    static convertStringToHexString(str: any): string;
    static convertHexStringToString(hex: any): string;
    static checkBytesToIntInput(bytes: any, numBytes: any, opt_startIndex: any): any;
    static convertByteArrayToWordArray(ba: any): any;
    static convertWordToByteArray(word: any, length: any): any[];
    static convertWordArrayToByteArray(wordArray: any, length?: number): any;
    static convertByteArrayToString(bytes: any, opt_startIndex?: number, length?: number): string;
    static convertWordArrayToUint8Array(wordArray: any): Uint8Array;
}
