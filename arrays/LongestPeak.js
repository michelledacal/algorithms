function longestPeak(array) {
	let longestPeak = 0;
	let i = 1;
	while (i < array.length - 1) {
		let isAPeak = array[i] > array[i-1] && array[i] > array[i+1];
		if (!isAPeak) {
			i++;
			continue;
		}
		
		let left = i - 2;
		while (left >= 0 && array[left] < array[left + 1]) {
			left--;
		}
		
		let right = i + 2;
		while (right < array.length && array[right] < array[right - 1]) {
			right++;
		}
		
		const currentPeak = right - left - 1;
		longestPeak = currentPeak > longestPeak ? currentPeak : longestPeak;
		i = right;
	}
	
	return longestPeak;
	
}

// time: O(n)
// space: O(1)
// where n is the length of the input array