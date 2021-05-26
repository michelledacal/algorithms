// time: O(n)
// space: O(1)
// where n is the length of the array

function firstDuplicateValue(array) {
  // loop through the array
    // grab array[i] and set that as index
    // look at array[index - 1]
      // if it is negative, return array[i]
      // else multiply by -1
  for (let i = 0; i < array.length; i++) {
    const idx = Math.abs(array[i]);
    const num = array[idx - 1];
    if (num < 0) return idx;
    array[idx - 1] *= -1;
  }
  // if no number was returned, return -1
  return -1;
}