/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const obj = {};

  names.forEach((item) => {
    if (obj[item] || obj[item] === 0) obj[item][0]++;
    else obj[item] = [0, 0];
  });

  const result = names.map((item) => {
    if (obj[item][0] === 0) return item;

    const index = obj[item][1];
    obj[item][1]++;

    if (index === 0) return item;

    return `${item}(${index})`;
  });

  if (!Object.values(obj).length) return [];

  const test = Object.values(obj)
    .reduce((ac, next) => ac + next, 0)
    .split(',')
    .map(Number)
    .reduce((ac, next) => ac + next, 0);

  if (test) {
    return renameFiles(result);
  }

  return result;
}

module.exports = renameFiles;
