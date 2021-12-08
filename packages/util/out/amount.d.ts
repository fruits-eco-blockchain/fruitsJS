import BigNumber from 'bignumber.js';
export declare enum AmountFormat {
    PLANCK = 0,
    FRUITS = 1
}
export declare class Amount {
    private _planck;
    private constructor();
    static CurrencySymbol(): string;
    static Zero(): Amount;
    static fromPlanck(planck: number | string): Amount;
    static fromFruit(signa: number | string): Amount;
    getRaw(): BigNumber;
    getPlanck(): string;
    setPlanck(p: string): void;
    getFruit(): string;
    setFruit(b: string): void;
    equals(amount: Amount): boolean;
    lessOrEqual(amount: Amount): boolean;
    less(amount: Amount): boolean;
    greaterOrEqual(amount: Amount): boolean;
    greater(amount: Amount): boolean;
    add(amount: Amount): Amount;
    subtract(amount: Amount): Amount;
    multiply(value: number): Amount;
    divide(value: number): Amount;
    toString(format?: AmountFormat): string;
    clone(): Amount;
}
