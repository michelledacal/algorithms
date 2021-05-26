// time: O(n^2)
// space: O(n)
// where n is the length of the array

function threeNumberSum(array, targetSum) {
  // sort the array
  array.sort((a,b) => a - b);
  // set empty array for triplets
  const triplets = [];
  // loop through the array
    // set two pointers: one at [i + 1] and at the end
    // while left < right
      // sum all the numbers
      // if sum equals targetSum
        // push nums to targetSum
        // move both pointers
      // if sum < targetSum, left++
      // if sum > targetSum, right--
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      const leftNum = array[left];
      const rightNum = array[right];
      const sum = num + leftNum + rightNum;
      if (sum === targetSum) {
        triplets.push([num, leftNum, rightNum]);
        left++;
        right--;
      }
      if (sum < targetSum) left++;
      if (sum > targetSum) right--;
    }
  }
  // return triplets
  return triplets;
}
