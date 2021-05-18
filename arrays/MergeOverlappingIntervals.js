function mergeOverlappingIntervals(array) {
	const sortedArr = array.sort((a,b) => a[0] - b[0])
	let first = sortedArr[0][0];
	let prev = sortedArr[0][1];
	let intervals = [];
	for (let i = 1; i < array.length; i++) {
		let next = sortedArr[i][0];
		if (next <= prev) {
			if (prev < sortedArr[i][1]) prev = sortedArr[i][1];
		} else {
			intervals.push([first, prev]);
			first = next;
			prev = sortedArr[i][1];
		}
	}
	intervals.push([first, prev]);
  return intervals;
}

// time: O(nlog(n))
// space: O(n)
// where n is the length of the input array