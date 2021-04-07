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
  const numArr = arr.filter((item) => item >= 0).sort((a, b) => a - b);
  let i = 0;

  const result = arr.map((item) => {
    if (item !== -1) {
      const num = numArr[i];
      i++;
      return num;
    }

    return item;
  });

  return result;
}

module.exports = sortByHeight;
