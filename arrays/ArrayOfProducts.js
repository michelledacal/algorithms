// time: O(n)
// space: O(n)
// where n is the length of the array

function arrayOfProducts(array) {
  // set an empty array for products
  const products = [];
  // start from the left and set a left product = 1
  let leftProduct = 1;
  // loop through the array
    // push left product to product array
    // multiply left product by array[i]
  for (let i = 0; i < array.length; i++) {
    products.push(leftProduct);
    leftProduct *= array[i];
  }
  // now start at the right and set right product = 1
  let rightProduct = 1;
  // loop through the array backward
    // multiply products[i] by right product
    // multiply right product by array[i]
  for (let i = array.length - 1; i >= 0; i--) {
    products[i] *= rightProduct;
    rightProduct *= array[i];
  }
  // return products
  return products;
}