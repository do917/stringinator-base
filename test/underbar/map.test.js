const _ = require('../../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    const arr = [1, 2, 3];
    expect(_.map(arr, num => num * num)).toEqual([1, 4, 9]);
  });
});