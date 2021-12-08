import { Contract } from './typings/contract';
export declare class ContractDataView {
    private _contract;
    static VariableLength: number;
    constructor(_contract: Contract);
    getContract(): Contract;
    countCodePages(): number;
    getVariableAsString(index: number): string;
    getDataBlocksAsString(index: number, count?: number): string;
    getVariableAsDecimal(index: number): string;
    getVariable(index: number): string;
    getHexDataAt(index: number, length?: number): string;
}
