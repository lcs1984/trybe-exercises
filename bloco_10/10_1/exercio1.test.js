const coding = require('./exercio1');

// 2. Teste se encode e decode são funções;

describe('encode decode block', () => {
    it('test if decode and encode are functions', () => {
      const encodeResult = coding.encode('leo');
      const decodeResult = coding.decode('leo');
      expect(typeof encodeResult).toBe("string")
      expect(typeof decodeResult).toBe("string");
    })
  });

  //Problem: I could not test if it is a function

// 3. Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;

it ('test if vogals are converted to numbers', () => {
    expect(coding.encode('a')).toBe('1')
    expect(coding.encode('e')).toBe('2')
    expect(coding.encode('i')).toBe('3')
    expect(coding.encode('o')).toBe('4')
    expect(coding.encode('u')).toBe('5');
});

it ('test if number are converted to vogals', () => {
    expect(coding.decode('1')).toBe('a')
    expect(coding.decode('2')).toBe('e')
    expect(coding.decode('3')).toBe('i')
    expect(coding.decode('4')).toBe('o')
    expect(coding.decode('5')).toBe('u');
});

it ('test if other numbers or characters are not converted', () => {
    expect(coding.encode('a')).toBe('1')
    expect(coding.decode('1')).toBe('a');
});