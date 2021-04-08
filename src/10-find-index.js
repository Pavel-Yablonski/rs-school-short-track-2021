/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let low = 0;
  let high = array.length - 1;
  let result = 0;

  let mid = Math.floor((low + high) / 2);

  while (low <= high) {
    if (array[mid] === value) {
      result = mid;
    }

    if (array[mid] > value) {
      high = mid - 1;
      mid = Math.floor((low + high) / 2);
    } else {
      low = mid + 1;
      mid = Math.floor((low + high) / 2);
    }
  }

  return result;
}

module.exports = findIndex;
