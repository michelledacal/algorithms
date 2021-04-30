function taskAssignment(k, tasks) {
	let taskIndices = {};
	for(let i = 0; i < tasks.length; i++) {
		let task = tasks[i];
		if (task in taskIndices) taskIndices[task].push(i);
		else taskIndices[task] = [i];
	}
	
	let pairedTasks = [];
	let sorted = [...tasks].sort((a,b) => a-b);
	for(let i = 0; i < k; i++) {
		let firstTask = sorted[i];
		let secondTask = sorted[sorted.length - 1 - i];
		let firstIdx = taskIndices[firstTask].pop();
		let secondIdx = taskIndices[secondTask].pop();
		pairedTasks.push([firstIdx, secondIdx])
	}
	
	return pairedTasks;	
}

// time: O(nlog(n))
// space: O(n)
// where n is the number of tasks