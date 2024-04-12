function doubleCartQuantities(cart) {
    // Iterate through each item in the cart
    for (let i = 0; i < cart.length; i++) {
        // Double the quantity of the current item
        cart[i] *= 2;
    }
    
    // Return the modified cart
    return cart;
}

const customerCart = [1, 2, 3, 4]; // Example cart with quantities

const updatedCart = doubleCartQuantities(customerCart);
console.log("Updated Cart:", updatedCart);
