const _ = require('../../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    const arr = [3, 5, 8];
    expect(_.reject(arr, num => num % 2 === 1)).toEqual([8]);
  });

  it('rejects null values from an object', () => {
    const arr = [3, 5, null, 8];
    expect(_.reject(arr, item => item === null)).toEqual([3, 5, 8]);
  });
});