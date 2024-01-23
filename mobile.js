// Function to add an item to the cart
function addToCart(event) {
  const item = event.target.dataset.item;
  const price = parseFloat(event.target.dataset.price);
  
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  cartItems.push({ item, price });
  
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  alert('Item added to cart!');
}
// Event listener for "Add to Cart" buttons on the product page
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});
