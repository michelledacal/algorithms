class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function mergeLinkedLists(headOne, headTwo) {
	let p1 = headOne;
	let p2 = headTwo;
	let prevp1 = null;
	while (p1 && p2) {
		if (p1.value < p2.value) {
			prevp1 = p1;
			p1 = p1.next;
		} else {
			if (prevp1) prevp1.next = p2;
			prevp1 = p2;
			p2 = p2.next;
			prevp1.next = p1;
		}
	}
	if (!p1) prevp1.next = p2;
	return headOne.value < headTwo.value ? headOne : headTwo;
}

// time: O(n + m)
// space: O(1)
// where n is the number of nodes in the first linked list and m is the number of nodes in the second linked list