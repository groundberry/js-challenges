function getSmaller(nodeA, nodeB) {
  if (nodeA == null) {
    return nodeB;
  }
  if (nodeB == null) {
    return nodeA;
  }
  return (nodeA.value < nodeB.value) ? nodeA : nodeB;
}

function linkedListMerge(headA, headB) {
  let currentNodeA = headA;
  let currentNodeB = headB;

  const head = getSmaller(headA, headB);
  let currentNode = head;

  while (currentNode) {
    if (currentNode === currentNodeA) {
      currentNodeA = currentNodeA.next;
    } else {
      currentNodeB = currentNodeB.next;
    }

    const smallerNode = getSmaller(currentNodeA, currentNodeB);
    currentNode.next = smallerNode;
    currentNode = currentNode.next;
  }

  return head;
}

module.exports = linkedListMerge;
