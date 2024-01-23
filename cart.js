// Function to display cart items on the cart page
function displayCartItems() {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    cartItemsContainer.innerHTML = '';
    
    let totalPrice = 0;
  
    if (cartItems.length === 0) {
      cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
      totalPriceElement.textContent = 'Rs.0';
    } else {
      cartItems.forEach((cartItem, index) => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');
        cartItemDiv.innerHTML = `
          <span>${cartItem.item}</span>
          <span>Price: $${cartItem.price}</span>
        `;
  
        cartItemsContainer.appendChild(cartItemDiv);
        totalPrice += cartItem.price;
      });
  
      totalPriceElement.textContent = `Rs.${totalPrice}`;
    }
  }
  
  // Function to clear the cart and remove all items from local storage
  function clearCart() {
    localStorage.removeItem('cartItems');
    displayCartItems(); // Update the cart display after clearing
  }
  
  // Event listener for "Clear Cart" button on the cart page
  const clearCartButton = document.querySelector('.clear-cart');
  if (clearCartButton) {
    clearCartButton.addEventListener('click', clearCart);
  }
  
  // Display cart items on the cart page when it loads
  document.addEventListener('DOMContentLoaded', function() {
    displayCartItems();
  });
  