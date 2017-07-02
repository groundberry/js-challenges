function linkedListInsert(head, value, index) {
  let currentNode = head;
  let previousNode;
  let count = 0;

  if (index === 0) {
    return {
      value,
      next: head,
    };
  }

  while (count < index) {
    count += 1;
    previousNode = currentNode;
    currentNode = currentNode.next;
  }

  const node = {
    value,
    next: currentNode,
  };
  previousNode.next = node;

  return head;
}

module.exports = linkedListInsert;
