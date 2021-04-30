function validStartingCity(distances, fuel, mpg) {
	let gas = 0;
	let lowestGas = 0;
	let city = 0;
	for (let i = 1; i < distances.length; i++) {
		gas += fuel[i-1] * mpg - distances[i-1];
		if (gas < lowestGas) {
			lowestGas = gas;
			city = i;
		}
	}
  return city;
}

// time: O(n)
// space: O(1)
// where n is the number of cities