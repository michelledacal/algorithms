// time: O(n)
// space: O(n)

function twoNumberSum(array, targetSum) {
  // store each num in array in a hash table
  const lib = {};
  // subtract num from targetSum and see if difference is in table
    // if it is, return [num, diff]
    // if not, store num in table
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    const diff = targetSum - num;
    if (diff in lib) return [num, diff];
    lib[num] = true;
  }
  // return empty array if no numbers add to targetSum
  return [];
}

// time: O(nlog(n))
// space: O(1)

function twoNumberSum(array, targetSum) {
  // sort the array
  array.sort((a,b) => a - b);
  // two pointers
  let left = 0;
  let right = array.length - 1;
  // while left < right
    // if left + right equals targetSum, return [left, right]
    // if left + right < targetSum, left++
    // if left + right > targetSum, right--
  while (left < right) {
    const leftNum = array[left];
    const rightNum = array[right];
    const sum = leftNum + rightNum;
    if (sum === targetSum) return [leftNum, rightNum];
    if (sum < targetSum) left++;
    if (sum > targetSum) right--;
  }
  // return empty array if no numbers add to targetSum
  return [];
}