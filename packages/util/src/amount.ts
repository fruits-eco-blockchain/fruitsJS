/**
 * Original work Copyright (c) 2020 Fruits Dev Team
 */
import BigNumber from 'bignumber.js';
import {CurrencyPlanckSymbol, CurrencySymbol} from './constants';

BigNumber.config({
    EXPONENTIAL_AT: [-9, 20]
});

/**
 * Enum to determine the representation format of [FruitsValue] string
 * @module util
 */
export enum AmountFormat {
    PLANCK,
    FRUITS,
}

function assureValidValue(v: string): void {
    if (!(v && /^-?\d*(\.\d+)?$/.test(v))) {
        throw new Error(`Invalid value: ${v}`);
    }
}

/**
 * A Value Object to facilitate FRUITS and Planck conversions/calculations.
 *
 * Note: This class uses a big number representation (ES5 compatible) under the hood, so
 * number limits and numeric calculations are much more precise than JS number type
 *
 * @module util
 */
export class Amount {

    private _planck: BigNumber;

    private constructor(planck: number | string) {
        if (typeof planck === 'string') {
            assureValidValue(planck);
        }
        this._planck = new BigNumber(planck);
    }

    public static CurrencySymbol(): string {
        return CurrencySymbol;
    }

    public static Zero(): Amount {
        return new Amount('0');
    }

    /**
     * Creates a FRUITS Value object from Planck
     * @param planck The value in Planck
     */
    public static fromPlanck(planck: number | string): Amount {
        return new Amount(planck);
    }

    /**
     * Creates a Value object from FRUITS
     * @param signa The value in FRUITS
     */
    public static fromFruit(signa: number | string): Amount {
        const b = new Amount('0');
        b.setFruit(typeof signa === 'number' ? signa.toString(10) : signa);
        return b;
    }

    /**
     * Leaky value getter
     * @return the underlying value in its big number representation (immutable)
     */
    getRaw(): BigNumber {
        return this._planck;
    }

    /**
     * @return Gets Planck representation
     */
    getPlanck(): string {
        return this._planck.toString();
    }

    /**
     * Sets value as Planck, i.e. overwrites current hold value
     * @param p The planck value
     */
    setPlanck(p: string): void {
        assureValidValue(p);
        this._planck = new BigNumber(p);
    }

    /**
     * Gets FRUITS representation
     * @return value in FRUITS
     */
    getFruit(): string {
        return this._planck.dividedBy(1E8).toString();
    }

    /**
     * Sets value as FRUITS, i.e. overwrites current hold value
     * @param b value in FRUITS
     */
    setFruit(b: string): void {
        assureValidValue(b);
        this._planck = new BigNumber(b).multipliedBy(1E8);
    }

    /**
     * Checks for equality
     * @param amount The other value to be compared
     * @return true if equal, otherwise false
     */
    public equals(amount: Amount): boolean {
        return this._planck.eq(amount._planck);
    }

    /**
     * Checks for lesser or equality
     * @param amount The other value to be compared
     * @return true if less or equal, otherwise false
     */
    public lessOrEqual(amount: Amount): boolean {
        return this._planck.lte(amount._planck);
    }

    /**
     * Checks for lesser value
     * @param amount The other value to be compared
     * @return true if less, otherwise false
     */
    public less(amount: Amount): boolean {
        return this._planck.lt(amount._planck);
    }

    /**
     * Checks for greater or equality value
     * @param amount The other value to be compared
     * @return true if greater or equal, otherwise false
     */
    public greaterOrEqual(amount: Amount): boolean {
        return this._planck.gte(amount._planck);
    }

    /**
     * Checks for greater value
     * @param amount The other value to be compared
     * @return true if greater, otherwise false
     */
    public greater(amount: Amount): boolean {
        return this._planck.gt(amount._planck);
    }

    /**
     * Adds two values
     * @param amount The other value to be added
     * @return the _mutated_ FruitsValue object
     */
    public add(amount: Amount): Amount {
        this._planck = this._planck.plus(amount._planck);
        return this;
    }

    /**
     * Subtracts from value
     * @param amount The other value to be subtracted
     * @return the _mutated_ FruitsValue object
     */
    public subtract(amount: Amount): Amount {
        this._planck = this._planck.minus(amount._planck);
        return this;
    }

    /**
     * Multiplies with a _numeric_ value (not FruitsValue)
     * @param value A numeric value to be multiplied with
     * @return the _mutated_ FruitsValue object
     */
    public multiply(value: number): Amount {
        this._planck = this._planck.multipliedBy(value);
        return this;
    }

    /**
     * Divides by a _numeric_ value (not FruitsValue)
     * @param value A numeric value to be divided by
     * @return the _mutated_ FruitsValue object
     */
    public divide(value: number): Amount {
        if (value === 0) {
            throw new Error('Division by zero');
        }
        this._planck = this._planck.div(value);
        return this;
    }

    /**
     * Gets a string representation in form `F 100` for FRUITS or `10000000000 frts` for Planck
     * @param format The format
     * @return The converted string accordingly the param in FRUITS or Planck
     */
    public toString(format: AmountFormat = AmountFormat.FRUITS): string {
        return format === AmountFormat.FRUITS ? `${CurrencySymbol} ${this.getFruit()}` : `${CurrencyPlanckSymbol} ${this._planck}`;
    }

    /**
     * Clones/Copies the current FruitsValue to a new object
     * @return new FruitsValue instance
     */
    public clone(): Amount {
        return Amount.fromPlanck(this.getPlanck());
    }
}
