"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_js_1 = require("bignumber.js");
const constants_1 = require("./constants");
bignumber_js_1.default.config({
    EXPONENTIAL_AT: [-9, 20]
});
var AmountFormat;
(function (AmountFormat) {
    AmountFormat[AmountFormat["PLANCK"] = 0] = "PLANCK";
    AmountFormat[AmountFormat["FRUITS"] = 1] = "FRUITS";
})(AmountFormat = exports.AmountFormat || (exports.AmountFormat = {}));
function assureValidValue(v) {
    if (!(v && /^-?\d*(\.\d+)?$/.test(v))) {
        throw new Error(`Invalid value: ${v}`);
    }
}
class Amount {
    constructor(planck) {
        if (typeof planck === 'string') {
            assureValidValue(planck);
        }
        this._planck = new bignumber_js_1.default(planck);
    }
    static CurrencySymbol() {
        return constants_1.CurrencySymbol;
    }
    static Zero() {
        return new Amount('0');
    }
    static fromPlanck(planck) {
        return new Amount(planck);
    }
    static fromFruit(signa) {
        const b = new Amount('0');
        b.setFruit(typeof signa === 'number' ? signa.toString(10) : signa);
        return b;
    }
    getRaw() {
        return this._planck;
    }
    getPlanck() {
        return this._planck.toString();
    }
    setPlanck(p) {
        assureValidValue(p);
        this._planck = new bignumber_js_1.default(p);
    }
    getFruit() {
        return this._planck.dividedBy(1E8).toString();
    }
    setFruit(b) {
        assureValidValue(b);
        this._planck = new bignumber_js_1.default(b).multipliedBy(1E8);
    }
    equals(amount) {
        return this._planck.eq(amount._planck);
    }
    lessOrEqual(amount) {
        return this._planck.lte(amount._planck);
    }
    less(amount) {
        return this._planck.lt(amount._planck);
    }
    greaterOrEqual(amount) {
        return this._planck.gte(amount._planck);
    }
    greater(amount) {
        return this._planck.gt(amount._planck);
    }
    add(amount) {
        this._planck = this._planck.plus(amount._planck);
        return this;
    }
    subtract(amount) {
        this._planck = this._planck.minus(amount._planck);
        return this;
    }
    multiply(value) {
        this._planck = this._planck.multipliedBy(value);
        return this;
    }
    divide(value) {
        if (value === 0) {
            throw new Error('Division by zero');
        }
        this._planck = this._planck.div(value);
        return this;
    }
    toString(format = AmountFormat.FRUITS) {
        return format === AmountFormat.FRUITS ? `${constants_1.CurrencySymbol} ${this.getFruit()}` : `${constants_1.CurrencyPlanckSymbol} ${this._planck}`;
    }
    clone() {
        return Amount.fromPlanck(this.getPlanck());
    }
}
exports.Amount = Amount;
//# sourceMappingURL=amount.js.map