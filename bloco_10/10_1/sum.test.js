const sum = (a, b) => a + b;

test('sum two values using test', () => {
  expect(sum(2, 3)).toEqual(5);
});

it('sum two values using it', () => {
  expect(sum(2, 4)).toEqual(6);
});