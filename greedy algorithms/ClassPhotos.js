function classPhotos(redShirtHeights, blueShirtHeights) {
	redShirtHeights.sort((a,b) => b-a);
	blueShirtHeights.sort((a,b) => b-a);
	let front = redShirtHeights[0] > blueShirtHeights[0] ? blueShirtHeights : redShirtHeights;
	let back = front === redShirtHeights ? blueShirtHeights : redShirtHeights;
	for(let i = 0; i < redShirtHeights.length; i++) {
		if (front[i] >= back[i]) {
			return false;
		}
	}
	return true;
}

// time: O(nlog(n))
// space: O(1)
// were n is the number of students