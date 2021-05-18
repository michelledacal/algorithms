function moveElementToEnd(array, toMove) {
	let left = 0;
	let right = array.length - 1;
	while (left < right) {
		if (array[right] === toMove) right--;
		if (array[left] === toMove) {
			let temp = array[right];
			array[right] = array[left];
			array[left] = temp;
		} else {
			left++;
		}
	}
	return array;
}

// time: O(n)
// space: O(1)
// where n is the length of the input array