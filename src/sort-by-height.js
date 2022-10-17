const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  let sortedArray = arr.filter((i) => i > 0).sort((a, b) => b - a);
  return arr.map((i) => (i > 0 ? (i = sortedArray.pop()) : i));
}

module.exports = {
  sortByHeight
};
