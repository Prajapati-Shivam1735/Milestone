const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    // Calculate the difference between original price and discounted price
    const discountAmount = originalPrice - discountedPrice;
    
    // Calculate the percentage discount
    const discountPercentage = (discountAmount / originalPrice) * 100;
    
    // Round off the discount percentage to two decimal places
    const roundedDiscountPercentage = Math.round(discountPercentage * 100) / 100;
    
    // Return the rounded discount percentage
    return roundedDiscountPercentage;
};

const originalPrice = 100; // Original price of the product
const discountedPrice = 80; // Discounted price of the product

const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
console.log("Discount Percentage:", discountPercentage + "%");
