const _ = require('../../underbar');

describe('first()', () => {
  it('returns the first element of an array', () => {
    const arr = ['first', 2, 3];
    expect(_.first(arr)).toEqual('first');
  });

  it('returns the first 2 elements of an array', () => {
    const arr = ['first', 2, 3];
    expect(_.first(arr, 2)).toEqual(['first', 2]);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    const arr = ['first', 2, 3];
    expect(_.first(arr, 100)).toEqual(['first', 2, 3]);
  });
});