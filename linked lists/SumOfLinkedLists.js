class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
	let pointOne = linkedListOne;
	let pointTwo = linkedListTwo;
	let carry = 0;
	let sumLinkedList = new LinkedList(0);
	let currentNode = sumLinkedList;
	while (pointOne || pointTwo || carry) {
		let numOne = pointOne ? pointOne.value : 0;
		let numTwo = pointTwo ? pointTwo.value : 0;
		let sum = numOne + numTwo + carry;
		carry = 0;
		if (sum >= 10) {
			sum = sum % 10;
			carry = 1;
		}
		currentNode.next = new LinkedList(sum);
		currentNode = currentNode.next;
		if (pointOne) pointOne = pointOne.next;
		if (pointTwo) pointTwo = pointTwo.next
	}
  return sumLinkedList.next;
}

// time: O(max(m, n))
// space: O(max(m, n))
// where m is the length of the first linked list and n is the length of the second linked list