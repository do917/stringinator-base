const _ = require('../../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
    const arr = [2, 4, 6, 7];
    expect(_.filter(arr, num => num % 2 === 1)).toEqual([7]);
  });

  it('filters an object to only numeric values', () => {
    const arr = [2, 'cool', 6, 7];
    expect(_.filter(arr, item => typeof item === 'number')).toEqual([2, 6, 7]);
  });
});