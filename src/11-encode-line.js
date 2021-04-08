/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    let count = 1;

    while (str[i + 1] === letter) {
      count++;
      i++;
    }

    if (str.length === 1) {
      result = str;
    } else if (count === 1) {
      result += letter;
    } else {
      result += count + letter;
    }
  }

  return result;
}

module.exports = encodeLine;
