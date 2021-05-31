// time: O(1)
// space: O(1)

class MinMaxStack {
  // need a constructor for stack, mins, and maxes
  constructor() {
    this.stack = [];
    this.min = [];
    this.max = [];
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  pop() {
    // going to need to check if number is a min or max
    const num = this.stack.pop();
    if (num === this.min[this.min.length - 1]) this.min.pop();
    if (num === this.max[this.max.length - 1]) this.max.pop();
    return num;
  }

  push(number) {
    // need to check if it's higher or lower than min or max or if min or max doesn't exist
    this.stack.push(number);
    if (number >= this.max[this.max.length - 1] || !this.max.length) this.max.push(number);
    if (number <= this.min[this.min.length - 1] || !this.min.length) this.min.push(number);
  }

  getMin() {
    return this.min[this.min.length - 1];
  }

  getMax() {
    return this.max[this.max.length - 1];
  }
}