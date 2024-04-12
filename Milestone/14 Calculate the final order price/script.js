const calculateTotalCost = (cart) => {
    // Initialize total cost to 0
    let totalCost = 0;
    
    // Iterate through each item in the cart
    cart.forEach(item => {
        // Calculate the cost of each item by multiplying unit price with quantity
        const itemCost = item.unitPrice * item.quantity;
        // Add the cost of the current item to the total cost
        totalCost += itemCost;
    });
    
    // Return the total cost
    return totalCost;
};

const customerCart = [
    { unitPrice: 10, quantity: 2 }, // First item: unit price = $10, quantity = 2
    { unitPrice: 5, quantity: 3 },  // Second item: unit price = $5, quantity = 3
    { unitPrice: 8, quantity: 1 }   // Third item: unit price = $8, quantity = 1
];

const totalCost = calculateTotalCost(customerCart);
console.log("Total Cost:", totalCost);
