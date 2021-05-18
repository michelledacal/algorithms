function smallestDifference(arrayOne, arrayTwo) {
	arrayOne = arrayOne.sort((a,b) => a-b);
	arrayTwo = arrayTwo.sort((a,b) => a-b);
	let i = 0;
	let j = 0;
	let absDiff = Math.abs(arrayOne[i] - arrayTwo[j]);
	let pair = [arrayOne[i], arrayTwo[j]];
	while (i < arrayOne.length && j < arrayTwo.length) {
		let diff = Math.abs(arrayOne[i] - arrayTwo[j]);
		if (diff < absDiff) {
			absDiff = diff;
			pair = [arrayOne[i], arrayTwo[j]];
		} else {
			if (arrayOne[i] < arrayTwo[j]) i++;
			else j++;
		}
	}
	return pair;
}

// time: O(nlog(n) + mlog(m))
// space: O(1)
// where n is the length of the first array and m is the length of the second array