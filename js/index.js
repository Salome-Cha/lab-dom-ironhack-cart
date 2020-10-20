// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  
  const element = product.querySelector('.subtotal span');
  const subtotal = price * quantity;
  element.innerHTML = subtotal;
  return subtotal;
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
   let productItems = document.getElementsByClassName('product');
   let total = 0

    let productArray = [...productItems]; 
    productArray.forEach((product) => {
    total += updateSubtotal(product);    
    })

  
  // ITERATION 3
    
  document.querySelector('#total-value span').innerHTML = total;
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

  const removeElements = document.getElementsByClassName('btn-remove');
  removeElements.addEventListener('click', removeProduct)
  //... your code goes here
});
