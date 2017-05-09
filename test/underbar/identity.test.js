const _ = require('../../underbar');

describe('identity()', () => {
  it('returns null if given null', () => {
    expect(_.identity(null)).toEqual(null);
  });

  it('returns the number if given a number', () => {
    expect(_.identity(3)).toEqual(3);
  });

  it('returns the same array if given an array', () => {
    expect(_.identity([1, 2])).toEqual([1, 2]);
  });

  it('returns the same object if given an object', () => {
    const obj = {
      test: 123
    }
    expect(_.identity(obj)).toEqual(obj);
  });
});