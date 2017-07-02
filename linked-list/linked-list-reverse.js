function linkedListReverse(head) {
  if (head == null) {
    return null;
  }

  let currentNode = head;
  const stack = [];

  while (currentNode) {
    stack.push(currentNode);
    currentNode = currentNode.next;
  }

  const newHead = stack.pop();
  currentNode = newHead;

  while (stack.length > 0) {
    currentNode.next = stack[stack.length - 1];
    currentNode = stack.pop();
  }

  currentNode.next = null;

  return newHead;
}

module.exports = linkedListReverse;
