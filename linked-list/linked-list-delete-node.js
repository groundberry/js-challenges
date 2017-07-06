function linkedListDelete(head, node) {
  let current = head;
  let previous;

  if (current == null) {
    return null;
  }

  if (current === node) {
    current = current.next;
    return current;
  }

  while (current !== node) {
    previous = current;
    current = current.next;
  }

  if (current === node) {
    if (current.next == null) {
      previous.next = null;
    } else {
      previous.next = current.next;
    }
  }

  return head;
}

module.exports = linkedListDelete;
