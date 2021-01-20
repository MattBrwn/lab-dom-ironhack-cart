// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let priceRubberduck = document.querySelector('.price span')
  let quantityRubberduck = document.querySelector('.quantity input')
        console.log(Number(priceRubberduck.innerHTML))
        console.log(Number(quantityRubberduck.value))
  let subtotalpriceRubberduck = Number(priceRubberduck.innerHTML) * Number(quantityRubberduck.value) //... your code goes here
  console.log(subtotalpriceRubberduck)
  let actualsubtotalpriceRubberduck = document.querySelector('.subtotal span')
  console.log(actualsubtotalpriceRubberduck.innerHTML)
  actualsubtotalpriceRubberduck.innerHTML = subtotalpriceRubberduck
}

function calculateAll(product) {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let i = 0
  for i = 0; i < = 

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
