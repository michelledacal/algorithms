function insertionSort(array) {
	for(let i = 1; i < array.length; i++) {
		let j = i;
		while (j > 0 && array[j] < array[j - 1]) {
			swapFunc(j, array)
			j--;
		}
	}
	return array;
	
	function swapFunc(i, array) {
		const temp = array[i - 1];
		array[i - 1] = array[i];
		array[i] = temp;
	}
	
}

// time: Best = O(n), Average - O(n^2), Worst - O(n^2)
// space: O(1)
// where n is the length of the input array