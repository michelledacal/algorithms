function getNthFib(n) {
	let fibNums = [0, 1];
	let counter = 3
	while (counter <= n) {
		let nextNum = fibNums[0] + fibNums[1];
		fibNums[0] = fibNums[1];
		fibNums[1] = nextNum;
		counter++;
	}
	return n > 1 ? fibNums[1] : fibNums[0]
}

// time: O(n)
// space:  O(1)
// where n is the input number