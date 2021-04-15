function runLengthEncoding(string) {
	let encoded = [];
	let count = 1;
	for (let i = 1; i < string.length; i++) {
		let current = string[i];
		let prev = string[i-1];
		if (count === 9 || current !== prev) {
			encoded.push(count, prev);
			count = 0;
		}
		count++;
	}
	encoded.push(count, string[string.length - 1]);
	return encoded.join('');
}

// time: O(n)
// space: O(n)
// where n is the length of the input string