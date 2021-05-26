// time: O(nlog(n))
// space: O(1)
// where n is the number of coins

function nonConstructibleChange(coins) {
  // sort the coins
  coins.sort((a,b) => a - b);
  // set min change to 0
  let minChange = 0;
  // loop through coins
    // if coins[i] <= minChange + 1, add coins[i] to minChange
    // else break
  for (let i = 0; i < coins.length; i++) {
    if (coins[i] <= minChange + 1) minChange += coins[i];
  }
  // return minChange + 1
  return minChange + 1;
}