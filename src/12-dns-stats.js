/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (!domains.length) return {};

  const result = {};
  let resultItem = '';

  const splitArr = [];
  const filterArr = [];

  for (let i = 0; i < domains.length; i++) {
    const splitItem = domains[i].split('.');

    for (let j = splitItem.length - 1; j >= 0; j--) {
      splitArr.push(splitItem[j]);
    }
  }

  const set = new Set(splitArr);

  set.forEach((item) => {
    filterArr.push(item);
  });

  for (let i = 0; i < filterArr.length; i++) {
    resultItem += `.${filterArr[i]}`;

    if (i < 2) result[resultItem] = domains.length;
    else result[resultItem] = 1;
  }

  return result;
}

module.exports = getDNSStats;
