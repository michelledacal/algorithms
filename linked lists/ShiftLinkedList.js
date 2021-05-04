class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function shiftLinkedList(head, k) {
	let currentTail = head;
	let length = 1;
	while (currentTail.next) {
		length++;
		currentTail = currentTail.next;
	}
	
	let newK = Math.abs(k) % length;
	if (!newK) return head;
	
	let newTail = head;
	let newTailLocation = k > 0 ? length - newK : newK;
	for (let i = 1; i < newTailLocation; i++) {
		newTail = newTail.next;
	}
	
	let newHead = newTail.next;
	newTail.next = null;
	currentTail.next = head;
	
	return newHead;
}

// time: O(n)
// space: O(1)
// where n is the number of nodes in the linked list