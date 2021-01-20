const sum = (a, b) => a + b;

test('sums.test', () => {
  expect(sum(2, 3)).toEqual(5);
});