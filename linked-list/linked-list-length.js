function linkedListLength(head) {
  if (head === null) {
    return 0;
  }

  let currentNode = head;
  let count = 1;

  while (currentNode.next !== null) {
    count += 1;
    currentNode = currentNode.next;
  }

  return count;
}

module.exports = linkedListLength;
