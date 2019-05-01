describe('foo', () => {
  test('1 + 1 = 2', () => {
    throw new Error('Break it.');
    expect(1 + 1).toEqual(2);
  });
});
