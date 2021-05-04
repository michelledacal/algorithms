class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseLinkedList(head) {
	let currentNode = head;
	let prevNode = null;
	while (currentNode) {
		const nextNode = currentNode.next;
		currentNode.next = prevNode;
		prevNode = currentNode;
		currentNode = nextNode;
	}
	return prevNode;
}

// time: O(n)
// space: O(1)
// where n is the number of nodes in the linked list