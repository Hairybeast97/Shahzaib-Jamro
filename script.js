let cart = [];

function addToCart(product) {
    cart.push(product);
    alert(product + " has been added to your cart!");
    localStorage.setItem('cart', JSON.stringify(cart));  // Save cart to local storage
    window.location.href = 'cart.html';  // Redirect to cart page
}

document.addEventListener('DOMContentLoaded', function() {
    // Load cart items from local storage
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartList = document.getElementById('cart-items');
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        cartList.appendChild(li);
    });

    // Handle form submission
    const form = document.getElementById('order-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();  // Prevent default form submission

            // Validate fields
            const name = document.getElementById('name').value;
            const address = document.getElementById('address').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;

            if (name && address && phone && email) {
                // Redirect to confirmation page
                window.location.href = 'confirmation.html';
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
});