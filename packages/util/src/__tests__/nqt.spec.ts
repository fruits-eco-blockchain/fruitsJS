import {sumNQTStringToNumber} from '../sumNQTStringToNumber';
import {convertNumberToNQTString} from '../convertNumberToNQTString';
import {convertNQTStringToNumber} from '../convertNQTStringToNumber';

describe('NQTFunctions', () => {

    describe('sumNQTStringToNumber', () => {

        const nqt1000 = convertNumberToNQTString(1000);
        const nqt500 = convertNumberToNQTString(500);
        const nqt20 = convertNumberToNQTString(20);

        it('should sum two NQT and returns Number', () => {
            const sum = sumNQTStringToNumber(nqt1000, nqt1000);
            expect(sum).toBe(2000);
        });

        it('should sum many NQT and returns Number', () => {
            const sum = sumNQTStringToNumber(nqt1000, nqt1000, nqt500, nqt20);
            expect(sum).toBe(2520);
        });

    });

    describe('convertNQTStringToNumber', () => {

        it('should convertNQTStringToNumber()', () => {
            let fruits = convertNQTStringToNumber('000000000');
            expect(fruits).toBe(0);
            fruits = convertNQTStringToNumber('12300000000');
            expect(fruits).toBe(123);
            fruits = convertNQTStringToNumber('-100000000');
            expect(fruits).toBe(-1);
            fruits = convertNQTStringToNumber('123000000');
            expect(fruits).toBe(1.23);

        });


        it('should fail convertNQTStringToNumber() on invalid input', () => {
            try {
                const nqt = convertNQTStringToNumber('');
                expect(nqt).toBe('Expected exception');
            } catch (e) {
                expect(e.message).toBe('Invalid argument');
            }

            try {
                const nqt = convertNQTStringToNumber(null);
                expect(nqt).toBe('Expected exception');
            } catch (e) {
                expect(e.message).toBe('Invalid argument');
            }

            try {
                const nqt = convertNQTStringToNumber(undefined);
                expect(nqt).toBe('Expected exception');
            } catch (e) {
                expect(e.message).toBe('Invalid argument');
            }
        });

    });

});
