// time: O(n)
// space: O(k)
// where n is the number of competitions and k is the number of teams

function tournamentWinner(competitions, results) {
  // set bestScore to 0 and bestTeam to empty string
  let bestScore = 0;
  let bestTeam = '';
  // set empty hash table with scores of the teams
  const scores = {};
  // loop through competitions
    // grab home and away team and find winner with results[i]
    // if winning team isn't in table, set score to 0
    // update winning team score
    // check if winning team score is greater than bestScore
      // if it is, set bestScore and bestTeam
  for (let i = 0; i < competitions.length; i++) {
    const [homeTeam, awayTeam] = competitions[i];
    const winningTeam = results[i] ? homeTeam : awayTeam;
    if (!(winningTeam in scores)) scores[winningTeam] = 0;
    scores[winningTeam]++;
    if (scores[winningTeam] > bestScore) {
      bestScore = scores[winningTeam];
      bestTeam = winningTeam;
    }
  }
  // return bestTeam
  return bestTeam;
}