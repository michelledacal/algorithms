function arrayOfProducts(array) {
  let products = [];
	let leftSum = 1;
	for (let i = 0; i < array.length; i++) {
		products.push(leftSum)
		leftSum *= array[i]
	}
	
	let rightSum = 1;
	for (let i = array.length - 1; i >= 0; i--) {
		products[i] *= rightSum;
		rightSum *= array[i];
	}
	return products;
}

// time: O(n)
// space: O(n)
// where n is the length of the input array