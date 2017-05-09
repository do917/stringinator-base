const _ = require('../../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const people = [
      {name: 'david',
        age: 12},
      {name: 'lauren',
        age: 11}
    ];
    expect(_.pluck(people, 'age')).toEqual([12, 11]);
  });
});