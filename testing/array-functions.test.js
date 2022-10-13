import { mySome, myPop } from './array-functions.js';

describe('Given mySome function is called', () => {
    test('When the parameters are [1, 2, 3, 4] and isBiggerThan10(), then the result should be false', () => {
        const data = [1, 2, 3, 4];
        const isBiggerThan10 = (i) => {
            return i > 10;
        };

        const expectedResult = false;
        const result = mySome(data, isBiggerThan10);
        expect(result).toBe(expectedResult);
    });
    test('When the parameters are [1, 2, 3, 4] and isBiggerThan10(), then the result should be true', () => {
        const data = [1, 2, 3, 13];
        const isBiggerThan10 = (i) => {
            return i > 10;
        };

        const expectedResult = true;
        const result = mySome(data, isBiggerThan10);
        expect(result).toBe(expectedResult);
    });
    test('When the first parameter is not an array should throw an "Error"', () => {
        const data = 'string';
        const isBiggerThan10 = (i) => {
            return i > 10;
        };
        try {
            mySome(data, isBiggerThan10);
        } catch (e) {
            expect(e.message).toBe(
                'Error: El parametro introducido no es válido'
            );
        }
    });
    test('When the array is empty, should throw an "Error"', () => {
        const data = [];
        const isBiggerThan10 = (i) => {
            return i > 10;
        };
        try {
            mySome(data, isBiggerThan10);
        } catch (e) {
            expect(e.message).toBe('Error: El array no puede estar vacio');
        }
    });
});

describe('Given myPop function is called', () => {
    test('When the parameter is [1, 2, 3, 4], then the result should be 4', () => {
        const data = [1, 2, 3, 4];

        const expectedResult = 4;
        const result = myPop(data);
        expect(result).toBe(expectedResult);
    });
    test('When the first parameter is not an array should throw an "Error"', () => {
        const data = 'string';
        try {
            myPop(data);
        } catch (e) {
            expect(e.message).toBe(
                'Error: El parametro introducido no es válido'
            );
        }
    });
    test('When the array is empty, should return undefined', () => {
        const data = [];
        const expectedResult = undefined;
        const result = myPop(data);
        expect(result).toBe(expectedResult);
    });
    test('When the function ends, it should return the last position of the array', () => {
        const data = [1, 2, 3, 4];
        const expectedResult = 4;
        const result = myPop(data);
        expect(result).toBe(expectedResult);
    });
});
