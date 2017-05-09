const _ = require('./underbar');

const first = function(str, n) {
  return n === undefined ? str[0] : str.slice(0, n);
};

const last = function(str, n) {
  return n === undefined ? str[str.length - 1] : str.slice(str.length - n)
};

const removeChar = function(str, target) {
  return _.reject(str.split(''), char => char === target).join('');
};

const hasChar = function(str, target) {
  return _.some(str.split(''), char => char === target);
};

const isOnlyDigits = function(str) {
  const digits = '01234567890'
  return _.every(str.split(''), char => digits.includes(char));
};

const filterToOnlyDigits = function(str) {
  const digits = '01234567890'
  return _.filter(str.split(''), char => digits.includes(char)).join('');
};

const truncateString = function(val, maxLength) {
  // A freebie solution, this is the ONLY method here that doesn't use Underbar.
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  return _.map(obj, item => truncateString(item, maxLength));
};

const countChars = function(str) {
  const countedChars = {};
  _.each(str.split(''), char => countedChars[char] = (countedChars[char] || 0) + 1);
  return countedChars;
};

const dedup = function(str) {
  return _.uniq(str.split('')).join('');
};

module.exports = {
  first: first,
  last: last,
  hasChar: hasChar,
  removeChar: removeChar,
  isOnlyDigits: isOnlyDigits,
  filterToOnlyDigits: filterToOnlyDigits,
  countChars: countChars,
  dedup: dedup,
  truncateLongItems: truncateLongItems,
  truncateString: truncateString
};