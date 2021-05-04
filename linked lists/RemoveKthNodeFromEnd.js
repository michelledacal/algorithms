class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeKthNodeFromEnd(head, k) {
	let firstPoint = head;
	let secondPoint = head;
	let count = 1;
	while (count <= k) {
		secondPoint = secondPoint.next;
		count++;
	}
	if (!secondPoint) {
		head.value = head.next.value;
		head.next = head.next.next;
		return;
	}
	while (secondPoint.next) {
		firstPoint = firstPoint.next;
		secondPoint = secondPoint.next;
	}
	firstPoint.next = firstPoint.next.next
}

// time: O(n)
// space: O(1)
// where n is the number of nodes in the linked list