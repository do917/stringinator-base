const _ = require('../../underbar');

describe('isArrayLike()', () => {
  it('returns true for an actual array', () => {
    const obj = [1, 2, 3];
    expect(_.isArrayLike(obj)).toBe(true);
  });

  it('returns true for an array-like object', () => {
    const obj = {
      length: 2,
      a: 1,
      b: 2
    }
    expect(_.isArrayLike(obj)).toBe(true);
  });

  it('returns false for a non-array-like object', () => {
    const obj = {
      a: 1,
      b: 2
    }
    expect(_.isArrayLike(obj)).toBe(false);
  });
});
