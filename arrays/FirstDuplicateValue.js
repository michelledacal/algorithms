function firstDuplicateValue(array) {
  for (let i = 0; i < array.length; i++) {
		let absVal = Math.abs(array[i]);
		let index = absVal - 1;
		if (array[index] < 0) return absVal;
		else array[index] *= -1
	}
  return -1;
}

// time: O(n)
// space: O(1)
// where n is the length of the input array