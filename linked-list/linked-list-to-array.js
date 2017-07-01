function linkedListToArray(head) {
  let currentNode = head;
  const arr = [];

  while (currentNode) {
    arr.push(currentNode.value);
    currentNode = currentNode.next;
  }

  return arr;
}

module.exports = linkedListToArray;
