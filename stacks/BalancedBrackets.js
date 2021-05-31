// time: O(n)
// space: O(n)
// where n is the length of the string

function balancedBrackets(string) {
  // need a hash table to store open brackets and their matching closing brackets
  const openBrackets = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  const closingBrackets = ')}]';
  // loop through string
    // when there's an open bracket, add to stack
    // when there's a closing one, check the stack
      // if it doesn't match, return false
      // else pop it off
  const stack = [];
  for (let i = 0; i < string.length; i++) {
    const bracket = string[i];
    if (openBrackets[bracket]) stack.push(openBrackets[bracket]);
    if (closingBrackets.includes(bracket)) {
      if (bracket === stack[stack.length - 1]) stack.pop();
      else return false;
    }
  }
  // return true if the stack is empty
  return !stack.length;
}