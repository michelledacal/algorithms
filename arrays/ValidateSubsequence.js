// time: O(n)
// space: O(1)
// where n is the length of the array

function isValidSubsequence(array, sequence) {
  // one pointer on sequence
  let pointer = 0;
  // loop through array
    // if array[i] equals sequence[pointer], pointer++
    // if end of sequence is reached, break
  for (let i = 0; i < array.length; i++) {
    if (array[i] === sequence[pointer]) pointer++;
    if (pointer === sequence.length) break;
  }
  // return pointer location in sequence
  return pointer === sequence.length;
}