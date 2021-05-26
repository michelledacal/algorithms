// time: O(nlog(n))
// space: O(n)
// where n is the length of the array

function mergeOverlappingIntervals(array) {
  // sort array by first num in intervals
  array.sort((a,b) => a[0] - b[0]);
  // set empty array to interval array
  const intervals = [];
  // set first and last to first set of intervals
  let first = array[0][0];
  let last = array[0][1];
  // loop through array
    // if array[i][0] <= last
      // and array[i][1] > last, set last to array[i][1]
    // else
      // push [first, last] to intervals
      // set first and last to current set of interval
  for (let i = 1; i < array.length; i++) {
    let next = array[i][0];
    if (next <= last) {
      if (array[i][1] > last) last = array[i][1];
    } else {
      intervals.push([first, last]);
      first = next;
      last = array[i][1];
    }
  }
  // push the last interval
  intervals.push([first, last]);
  // return intervals
  return intervals;
}