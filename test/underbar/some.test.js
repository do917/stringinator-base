const _ = require('../../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const arr = [3, 2, 6];
    expect(_.some(arr, num => num % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    const arr = [4, 2, 6];
    expect(_.some(arr, num => num % 2 === 1)).toBe(false);
  });
});