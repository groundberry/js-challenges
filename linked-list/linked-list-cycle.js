function linkedListCycle(head) {
  let currentNode = head;
  const visitedNodes = new Set();

  while (currentNode) {
    if (visitedNodes.has(currentNode)) {
      return true;
    }

    visitedNodes.add(currentNode);
    currentNode = currentNode.next;
  }

  return false;
}

module.exports = linkedListCycle;
