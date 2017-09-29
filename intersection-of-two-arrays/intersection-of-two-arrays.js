// Find the intersection of two arrays. An intersection would be the common
// elements that exists within both arrays.
// In this case, these elements should be unique!

function findIntersection(arr1, arr2) {
  const hashmap = {};
  const result = [];

  for (let i = 0; i < arr1.length; i += 1) {
    hashmap[arr1[i]] = 1;
  }

  for (let j = 0; j < arr2.length; j += 1) {
    if (hashmap[arr2[j]] === 1) {
      result.push(arr2[j]);
      hashmap[arr2[j]] += 1;
    }
  }

  return result;
}

module.exports = findIntersection;
