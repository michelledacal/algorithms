function tournamentWinner(competitions, results) {
	let bestTeam = '';
	let teams = {[bestTeam]: 0};
	for (let i = 0; i < competitions.length; i++) {
		const [homeTeam, awayTeam] = competitions[i];
		const winningTeam = results[i] ? homeTeam : awayTeam;
		if (!(homeTeam in teams)) teams[homeTeam] = 0;
		if (!(awayTeam in teams)) teams[awayTeam] = 0;
		teams[winningTeam] += 3;
		if (teams[winningTeam] > teams[bestTeam]) {
			bestTeam = winningTeam;
		}
	}
  return bestTeam;
}

// time: O(n)
// space: O(k)
// where n is the number of competitions and k is the number of teams