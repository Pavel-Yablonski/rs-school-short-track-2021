/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = String(n).split('');
  const result = [];
  let minNum = arr[0];
  let state = true;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minNum) minNum = arr[i];
  }

  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] === minNum) && state) state = false;
    else result.push(arr[i]);
  }

  return Number(result.reduce((ac, next) => ac + next));
}

module.exports = deleteDigit;
