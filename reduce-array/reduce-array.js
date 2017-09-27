// Implementation of Array.prototype.reduce().

function reduceArray(arr, func, start) {
  let result = start;

  for (let i = 0; i < arr.length; i += 1) {
    result = func(result, arr[i]);
  }

  return result;
}


module.exports = reduceArray;
