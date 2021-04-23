function threeNumberSort(array, order) {
	let lib = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i] === order[0]) lib++;
	}
	
	let firstIdx = 0;
	let secondIdx = lib;

	for (let i = 0; i < array.length; i++) {
		if (array[i] === order[0]){
			swapFunc(i, firstIdx, array);
			firstIdx++;
		}
	}
	for (let i = secondIdx; i < array.length; i++) {
		if (array[i] === order[1]){
			swapFunc(i, secondIdx, array);
			secondIdx++;
		}
	}
	
	return array;
	
	function swapFunc(i, j, array) {
		const temp = array[j];
		array[j] = array[i];
		array[i] = temp;
	}
	
}

// time: O(n)
// space: O(1)
// where n is the length of the input array