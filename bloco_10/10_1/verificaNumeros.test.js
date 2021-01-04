const numeros = require('./verificaNumeros');

describe('Requisito 1', () => {
    test('A função recebe [1,2,3,4,5] e retorna true', () =>{
        expect(true).toEqual(numeros([1,2,3,4,5]));
    });
});

describe('Requisito 2', () => {
    test('A função recebe true e retorna [1,2,3,4,5]', () =>{
        expect(numeros([1,2,3,4,5])).toEqual(true);
    });
});

describe('Requisito 3', () => {
    test('A função recebe [1,2,"3",4,5] e retorna false', () =>{
        expect(false).toEqual(numeros([1,2,"3",4,5]));
    });
});

describe('Requisito 4', () => {
    test(`A função recebe [' '] e retorna false`, () => {
        expect(false).toEqual(numeros([' ']));
    });
});