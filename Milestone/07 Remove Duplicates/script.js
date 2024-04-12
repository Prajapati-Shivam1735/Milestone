function removeDuplicateItems(cart) {
    
    const uniqueItems = new Set();

    
    cart.forEach(item => {
        
        uniqueItems.add(JSON.stringify(item));
    });

    const uniqueCart = Array.from(uniqueItems).map(item => JSON.parse(item));
    
    return uniqueCart;
}

const customerCartWithDuplicates = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    { id: 1, name: "Product A" }, // Duplicate item
    { id: 3, name: "Product C" },
    { id: 2, name: "Product B" }  // Duplicate item
];

const uniqueCart = removeDuplicateItems(customerCartWithDuplicates);
console.log("Cart without duplicates:", uniqueCart);
