function isValidSubsequence(array, sequence) {
	let j = 0;
		for(let i = 0; i < array.length; i++) {
			if (sequence[j] === array[i]) j++;
			if (j === sequence.length) break;
		}
	return j === sequence.length;
}

// time: O(n)
// space: O(1)