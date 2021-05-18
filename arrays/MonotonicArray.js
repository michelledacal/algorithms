function isMonotonic(array) {
	let type = array[1] - array[0];
	for(let i = 0; i < array.length - 1; i++) {
		if (type === 0) {
			type = array[i+1] - array[i];
			continue;
		}
		let checkType = array[i+1] - array[i];
		if (type < 0 && checkType > 0 || type > 0 && checkType < 0) {
			return false;
		} 
	}
	return true;
}
// time: O(n)
// space: O(1)
// where n is the length of the array