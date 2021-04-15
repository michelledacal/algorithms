function sortedSquaredArray(array) {
	let pointOne = 0;
	let pointTwo = array.length - 1;
	let squares = new Array(array.length).fill(0);
	for(let i = array.length - 1; i >= 0; i--) {
		let oneVal = array[pointOne];
		let twoVal = array[pointTwo];
		if (Math.abs(oneVal) > Math.abs(twoVal)) {
			squares[i] = oneVal * oneVal;
			pointOne++;
		} else {
			squares[i] = twoVal * twoVal;
			pointTwo--;
		}
	}
	return squares;
}

// time: O(n)
// space: O(n)
// where n is the length of the input array