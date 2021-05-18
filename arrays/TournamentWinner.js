function tournamentWinner(competitions, results) {
	let highestScore = 0;
	let winningTeam = '';
	let scores = {};
	
	for (let i = 0; i < competitions.length; i++) {
		let [home, away] = competitions[i];
		let winner = results[i] ? home : away;
		if (!(winner in scores)) scores[winner] = 0;
		scores[winner]++;
		if (scores[winner] > highestScore) {
			highestScore = scores[winner];
			winningTeam = winner;
		}
	}
	
	return winningTeam;
}

// time: O(n)
// space: O(k)
// where n is the number of competitions and k is the number of teams