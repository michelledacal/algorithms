function twoNumberSum(array, targetSum) {
	let lib = {};
	for(let i = 0; i < array.length; i++) {
		let targetNum = targetSum - array[i];
		if (targetNum in lib) {
			return [targetNum, array[i]]
		}
		lib[array[i]] = true;
	}
	return [];
}