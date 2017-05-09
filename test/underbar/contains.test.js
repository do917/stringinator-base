const _ = require('../../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    const arr = [1, 2, 3];
    expect(_.contains(arr, 3)).toBe(true);
  });

  it('returns false if an array does not contain the target', () => {
    const arr = [1, 2, 3];
    expect(_.contains(arr, 5)).toBe(false);
  });

  it('returns true if the target value is among the values of an object', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3
    };
    expect(_.contains(obj, 3)).toBe(true);
  });

  it('returns false if the target value is not among the values of an object', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3
    };
    expect(_.contains(obj, 5)).toBe(false);
  });
});