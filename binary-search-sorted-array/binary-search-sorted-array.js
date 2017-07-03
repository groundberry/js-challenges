function searchNumInRange(arr, num, startIndex, endIndex) {
  if (startIndex === endIndex) {
    return num === arr[startIndex] ? startIndex : -1;
  }

  if ((endIndex + startIndex) % 2 === 0) {
    const halfIndex = (endIndex + startIndex) / 2;
    if (num < arr[halfIndex]) {
      return searchNumInRange(arr, num, startIndex, halfIndex - 1);
    }
    if (num > arr[halfIndex]) {
      return searchNumInRange(arr, num, halfIndex + 1, endIndex);
    }
    return halfIndex;
  }

  const halfIndex = (endIndex + startIndex) / 2;
  const halfIndexFloor = Math.floor(halfIndex);
  const halfIndexCeil = Math.ceil(halfIndex);
  if (num <= arr[halfIndexFloor]) {
    return searchNumInRange(arr, num, startIndex, halfIndexFloor);
  }
  if (num >= arr[halfIndexCeil]) {
    return searchNumInRange(arr, num, halfIndexCeil, endIndex);
  }
  return -1;
}

function searchNum(arr, num) {
  return searchNumInRange(arr, num, 0, arr.length - 1);
}

module.exports = searchNum;
