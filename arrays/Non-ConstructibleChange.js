function nonConstructibleChange(coins) {
	let change = 0;
	coins.sort((a,b) => a - b);
	for (let i = 0; i < coins.length; i++) {
		if (coins[i] > change + 1) return change + 1;
		change += coins[i];
	}
  return change + 1;
}

// time: O(nlog(n))
// space: O(1)
// where n is the number of coins