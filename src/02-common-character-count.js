/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const objS1 = {};
  const objS2 = {};
  let count = 0;

  for (let i = 0; i < s1.length; i++) {
    if (objS1[s1[i]]) objS1[s1[i]]++;
    else objS1[s1[i]] = 1;
  }

  for (let i = 0; i < s2.length; i++) {
    if (objS2[s2[i]]) objS2[s2[i]]++;
    else objS2[s2[i]] = 1;
  }

  const arrS1 = Object.keys(objS1);

  for (let i = 0; i < arrS1.length; i++) {
    if (objS2[arrS1[i]]) {
      if (objS1[arrS1[i]] <= objS2[arrS1[i]]) count += objS1[arrS1[i]];
      else count += objS2[arrS1[i]];
    }
  }

  return count;
}

module.exports = getCommonCharacterCount;
