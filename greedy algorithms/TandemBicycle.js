function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  redShirtSpeeds.sort((a,b) => a - b);
	blueShirtSpeeds.sort((a,b) => a - b);
	let redIdx = 0;
	let speed = 0;
	let blueIdx = fastest ? blueShirtSpeeds.length - 1 : 0;
	let blueStep = fastest ? -1 : 1;
	while (redIdx < redShirtSpeeds.length) {
		if (redShirtSpeeds[redIdx] > blueShirtSpeeds[blueIdx]) speed += redShirtSpeeds[redIdx];
		else speed += blueShirtSpeeds[blueIdx]
		blueIdx += blueStep;
		redIdx++;
	}
  return speed;
}

// time: O(nlog(n))
// space: O(1)
// where n is the number of tandem bicycles