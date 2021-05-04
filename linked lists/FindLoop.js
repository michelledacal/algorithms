class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findLoop(head) {
  let first = head.next;
	let second = head.next.next;
	while (first !== second) {
		first = first.next;
		second = second.next.next;
	}
	
	first = head;
	while (first !== second) {
		first = first.next;
		second = second.next;
	}
	return first;
}

// time: O(n)
// space: O(1)
// where n is the number of nodes in the list