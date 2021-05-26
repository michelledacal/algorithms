// time: O(n)
// space: O(1)
// where n is the length of the array

function longestPeak(array) {
  // we know peaks forms when [i - 1] and [i + 1] are less than array[i]
  // find index of peaks in array in loop and push to peaks array
    // can start at 1 and end at array.length - 1
  const peaks = [];
  for (let i = 1; i < array.length - 1; i++) {
    if (array[i - 1] < array[i] && array[i + 1] < array[i]) peaks.push(i);
  }
  // set length of longest peak to 0
  let longestLength = 0;
  // loop through peaks array
    // move in both directions
    // keep checking if the next number is less than the previous
    // if it is, add to the length
    // when done, check length against length of longest peak
  for (let i = 0; i < peaks.length; i++) {
    const idx = peaks[i];
    let length = 3;

    let leftIdx = idx - 1;
    while (array[leftIdx] > array[leftIdx - 1]) {
      length++;
      leftIdx--;
    }

    let rightIdx = idx + 1;
    while (array[rightIdx] > array[rightIdx + 1]) {
      length++;
      rightIdx++;
    }

    if (length > longestLength) longestLength = length;
  }
  // return longest length
  return longestLength;
 }