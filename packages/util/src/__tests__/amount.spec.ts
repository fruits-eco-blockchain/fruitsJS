import {Amount, AmountFormat} from '../amount';

describe('Amount', () => {
    describe('fromFruit', () => {
        it('Should create an instance correctly', () => {
            expect(Amount.fromFruit(1).getFruit()).toEqual('1');
            expect(Amount.fromFruit('1').getFruit()).toEqual('1');
        });
        it('Should throw an error on invalid value', () => {
            expect(() => Amount.fromFruit('')).toThrow();
            expect(() => Amount.fromFruit('test')).toThrow();
        });
    });
    describe('fromPlanck', () => {
        it('Should create an instance correctly', () => {
            expect(Amount.fromPlanck(1).getFruit()).toEqual('0.00000001');
            expect(Amount.fromPlanck('1').getFruit()).toEqual('0.00000001');
            expect(Amount.fromPlanck('100').getFruit()).toEqual('0.000001');
        });
        it('Should throw an error on invalid value', () => {
            expect(() => Amount.fromPlanck('')).toThrow();
            expect(() => Amount.fromPlanck('test')).toThrow();
        });
    });
    describe('getPlanck', () => {
        it('Should return value correctly', () => {
            expect(Amount.fromPlanck('1').getPlanck()).toEqual('1');
            expect(Amount.fromPlanck('0').getPlanck()).toEqual('0');
            expect(Amount.fromPlanck(0).getPlanck()).toEqual('0');
            expect(Amount.fromFruit('1').getPlanck()).toEqual('100000000');
        });
    });
    describe('setPlanck', () => {
        it('Should set value correctly', () => {
            const amount = Amount.fromPlanck('0');
            amount.setPlanck('10');
            expect(amount.getPlanck()).toEqual('10');
        });
        it('Should throw error for invalid value', () => {
            const amount = Amount.fromPlanck('0');
            expect(() => {
                amount.setPlanck('');
            }).toThrow();
        });
    });
    describe('getFruit', () => {
        it('Should return value correctly', () => {
            expect(Amount.fromFruit('1').getFruit()).toEqual('1');
            expect(Amount.fromFruit('0').getFruit()).toEqual('0');
            expect(Amount.fromPlanck('1').getFruit()).toEqual('0.00000001');
        });
    });
    describe('setFruit', () => {
        it('Should set value correctly', () => {
            const amount = Amount.fromFruit('0');
            amount.setFruit('10');
            expect(amount.getFruit()).toEqual('10');
        });
        it('Should throw error for invalid value', () => {
            const amount = Amount.fromFruit('0');
            expect(() => {
                amount.setFruit('');
            }).toThrow();
        });
    });
    describe('getRaw', () => {
        it('Should return value correctly', () => {
            expect(Amount.fromPlanck('1').getRaw().eq(1)).toBeTruthy();
            expect(Amount.fromFruit('1').getRaw().eq(1E8)).toBeTruthy();
        });
        it('Returned value should be immutable', () => {
            const amount = Amount.fromFruit('1');
            expect(amount.getFruit()).toEqual('1');
            const raw = amount.getRaw();
            raw.plus(1);
            expect(amount.getFruit()).toEqual('1');
        });
    });
    describe('toString', () => {
        it('Return String as Planck', () => {
            const amount = Amount.fromFruit('10');
            expect(amount.toString(AmountFormat.PLANCK)).toEqual('1000000000 frts');
        });
        it('Return String as BURST', () => {
            const amount = Amount.fromFruit('10');
            expect(amount.toString()).toEqual('F 10');
            expect(amount.toString(AmountFormat.FRUITS)).toEqual('10 FRTS');
        });
    });
    describe('equals', () => {
        it('should return true for value equality', () => {
            const amount1 = Amount.fromFruit('10');
            const amount2 = Amount.fromFruit('10');
            expect(amount1.equals(amount2)).toBeTruthy();
        });
        it('should return false for value inequality', () => {
            const amount1 = Amount.fromFruit('10');
            const amount2 = Amount.fromFruit('20');
            expect(amount1.equals(amount2)).toBeFalsy();
        });
    });
    describe('less', () => {
        it('should return true for lesser value', () => {
            const amount1 = Amount.fromFruit('1');
            const amount2 = Amount.fromFruit('10');
            expect(amount1.less(amount2)).toBeTruthy();
        });
        it('should return false for non-lesser value', () => {
            const amount1 = Amount.fromFruit('10');
            const amount2 = Amount.fromFruit('1');
            expect(amount1.less(amount2)).toBeFalsy();
            expect(amount1.less(amount1)).toBeFalsy();
        });
    });
    describe('lessOrEqual', () => {
        it('should return true for lesser-or-equal value', () => {
            const amount1 = Amount.fromFruit('1');
            const amount2 = Amount.fromFruit('10');
            expect(amount1.lessOrEqual(amount2)).toBeTruthy();
            expect(amount1.lessOrEqual(amount1)).toBeTruthy();
        });
        it('should return false for non-lesser-or-equal value', () => {
            const amount1 = Amount.fromFruit('10');
            const amount2 = Amount.fromFruit('1');
            expect(amount1.lessOrEqual(amount2)).toBeFalsy();
        });
    });
    describe('greater', () => {
        it('should return true for greater value', () => {
            const amount1 = Amount.fromFruit('10');
            const amount2 = Amount.fromFruit('1');
            expect(amount1.greater(amount2)).toBeTruthy();
        });
        it('should return false for non-greater value', () => {
            const amount1 = Amount.fromFruit('1');
            const amount2 = Amount.fromFruit('10');
            expect(amount1.greater(amount2)).toBeFalsy();
            expect(amount1.greater(amount1)).toBeFalsy();
        });
    });
    describe('greaterOrEqual', () => {
        it('should return true for greater-or-equal value', () => {
            const amount1 = Amount.fromFruit('10');
            const amount2 = Amount.fromFruit('1');
            expect(amount1.greaterOrEqual(amount2)).toBeTruthy();
            expect(amount1.greaterOrEqual(amount1)).toBeTruthy();
        });
        it('should return false for non-greater-or-equal value', () => {
            const amount1 = Amount.fromFruit('1');
            const amount2 = Amount.fromFruit('10');
            expect(amount1.greaterOrEqual(amount2)).toBeFalsy();
        });
    });
    describe('add', () => {
        it('should return correct sum single', () => {
            const amount1 = Amount.fromFruit('10');
            const amount2 = Amount.fromFruit('1');
            expect(amount1.add(amount2).getFruit()).toBe('11');
        });
        it('should return correct sum multiple', () => {
            const amount1 = Amount.fromFruit('10');
            const amount2 = Amount.fromFruit('1.25');
            expect(amount1.add(amount1).add(amount2).getFruit()).toBe('21.25');
        });
    });
    describe('subtract', () => {
        it('should return correct difference - single', () => {
            const amount1 = Amount.fromFruit('10');
            const amount2 = Amount.fromFruit('1');
            expect(amount1.subtract(amount2).getFruit()).toBe('9');
        });
        it('should return correct difference - multiple', () => {
            const amount1 = Amount.fromFruit('10');
            const amount2 = Amount.fromFruit('1');
            expect(amount1.subtract(amount2).subtract(amount2).getFruit()).toBe('8');
        });
        it('should return correct difference - negative', () => {
            const amount1 = Amount.fromFruit('1');
            const amount2 = Amount.fromFruit('10');
            expect(amount1.subtract(amount2).getFruit()).toBe('-9');
        });
    });
    describe('multiply', () => {
        it('should return correct product - single', () => {
            const amount1 = Amount.fromFruit('10');
            expect(amount1.multiply(2).getFruit()).toBe('20');
        });
        it('should return correct product - fraction', () => {
            const amount1 = Amount.fromFruit('10');
            expect(amount1.multiply(0.5).getFruit()).toBe('5');
        });
        it('should return correct product - multiple', () => {
            const amount1 = Amount.fromFruit('10');
            expect(amount1.multiply(2).multiply(10).getFruit()).toBe('200');
        });
        it('should return correct product - identity', () => {
            const amount1 = Amount.fromFruit('10');
            expect(amount1.multiply(1).getFruit()).toBe('10');
        });
        it('should return correct product - zero', () => {
            const amount1 = Amount.fromFruit('10');
            expect(amount1.multiply(0).getFruit()).toBe('0');
        });
    });
    describe('divide', () => {
        it('should return correct quotient - single', () => {
            const amount1 = Amount.fromFruit('10');
            expect(amount1.divide(2).getFruit()).toBe('5');
        });
        it('should return correct quotient - fraction', () => {
            const amount1 = Amount.fromFruit('10');
            expect(amount1.divide(0.5).getFruit()).toBe('20');
        });
        it('should return correct quotient - identity', () => {
            const amount1 = Amount.fromFruit('10');
            expect(amount1.divide(1).getFruit()).toBe('10');
        });
        it('should throw error div-by-zero', () => {
            const amount1 = Amount.fromFruit('10');
            expect(() => {
                amount1.divide(0).getFruit();
            }).toThrow();
        });
    });

    describe('clone', () => {
        it('should return cloned instance value', () => {
            const amount = Amount.fromFruit('10');
            const cloned = amount.clone();
            amount.add(Amount.fromFruit('2'));
            expect(cloned.getFruit()).toBe('10');
        });
    });
});
