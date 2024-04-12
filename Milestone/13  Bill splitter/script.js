function calculateBillPerPerson(costPerDish, numberOfPeople) {
    // Calculate total bill
    const totalBill = costPerDish * numberOfPeople;
    
    // Calculate bill per person
    const billPerPerson = totalBill / numberOfPeople;
    
    // Return an object containing total bill and bill per person
    return {
        totalBill: totalBill,
        billPerPerson: billPerPerson
    };
}

const dishCost = 50; // Cost of each dish
const numberOfPeople = 4; // Number of people sharing the dish

const billDetails = calculateBillPerPerson(dishCost, numberOfPeople);
console.log("Total Bill:", billDetails.totalBill);
console.log("Bill Per Person:", billDetails.billPerPerson);
