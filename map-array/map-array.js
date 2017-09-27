// Implementation of Array.prototype.map().

function mapArray(arr, func) {
  const result = [];

  for (let i = 0; i < arr.length; i += 1) {
    result[i] = func(arr[i]);
  }

  return result;
}


module.exports = mapArray;
