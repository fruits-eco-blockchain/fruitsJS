import {calculateMinimumCreationFee} from '../calculateMinimumCreationFee';

describe('calculateMinimumCreationFee', () => {
    it('calculates minimum contract fee in planck - inactive CIP20', () => {
        expect(calculateMinimumCreationFee('xx'.repeat(513)).getFruit()).toBe('6');
        expect(calculateMinimumCreationFee('xx'.repeat(300)).getFruit()).toBe('5');
        expect(calculateMinimumCreationFee('xx'.repeat(1)).getFruit()).toBe('4');
    });

    it('calculates minimum contract fee in planck - active CIP20', () => {
        expect(calculateMinimumCreationFee('xx'.repeat(513), true).getFruit()).toBe('0.441');
        expect(calculateMinimumCreationFee('xx'.repeat(300), true).getFruit()).toBe('0.3675');
        expect(calculateMinimumCreationFee('xx'.repeat(1), true).getFruit()).toBe('0.294');
    });
});
