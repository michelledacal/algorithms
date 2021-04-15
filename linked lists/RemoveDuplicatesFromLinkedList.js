class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  let currentNode = linkedList;
	let nextNode = currentNode.next;
	while (nextNode) {
		if (currentNode.value === nextNode.value) {
			nextNode = nextNode.next;
		} else {
			currentNode.next = nextNode;
			currentNode = nextNode;
		}
	}
	currentNode.next = nextNode;
  return linkedList;
}

// time: O(n)
// space: O(1)
// where n is the number of nodes in the list