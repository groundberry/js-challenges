// Removing duplicates of an array and returning an array of only unique elements

function removeDuplicates(arr) {
  const hashmap = {};
  const result = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (!Object.prototype.hasOwnProperty.call(hashmap, arr[i])) {
      hashmap[arr[i]] = 1;
      result.push(arr[i]);
    }
  }
  return result;
}

module.exports = removeDuplicates;
