const _ = require('../../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const arr = [3, 3, 5, 6, 5, 8, 8]
    expect(_.uniq(arr)).toEqual([3, 5, 6, 8]);
  });
});