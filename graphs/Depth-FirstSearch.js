class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
		array.push(this.name);
		this.children.forEach(node => {
			node.depthFirstSearch(array);
		})
		return array;
  }
}

// time: O(v + e)
// space: O(v)
//  where v is the number of vertices of the input graph and e is the numbers of edges in the input graph