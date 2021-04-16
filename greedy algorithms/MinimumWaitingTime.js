function minimumWaitingTime(queries) {
	let totalWaitTime = 0;
	let waitTime = 0;
	queries.sort((a,b) => a - b);
	for (let i = 1; i < queries.length; i++) {
		waitTime += queries[i - 1];
		totalWaitTime += waitTime;
	}
  return totalWaitTime;
}

// time: O(nlog(n))
// space: O(1)
// where n is the number of queries