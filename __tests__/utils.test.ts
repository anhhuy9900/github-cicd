import { toLowerCase, toUppercase, convertArrayToString } from '../src/utils';

describe('TESTING UTILS FUNCTIONS', () => {
    it('toLowerCase => Should return a string has been lowercase', () => {
        const str = toLowerCase('LOWERCASE WORDS');
        expect(str).not.toBeNull();
        expect(str).not.toBe(undefined);
        expect(str).toEqual('lowercase words');
    });

    it('toUppercase => Should return a string has been uppercase', () => {
        const str = toUppercase('uppercase words');
        //expect(str).not.toBeNull();
        expect(str).toBeNull();
        expect(str).not.toBe(undefined);
        expect(str).toEqual('UPPERCASE WORDS');
    })

    it('convertArrayToString => Should return a string has been stringify', () => {
        const str = convertArrayToString([]);
        expect(str).not.toBeNull();
        expect(str).not.toBe(undefined);
        expect(str).toEqual("[]");
    })
})