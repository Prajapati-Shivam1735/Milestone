function rentalCost(days , carType){
    let costPerDay;

    switch(carType){
        case 'economy':
            costPerDay = 4000;
            break;
        
        case 'midsize':
            costPerDay = 10000;
            break;
        
        case 'luxury':
            costPerDay = 20000;
            break;

        default:
            return "Invalid Car Type";
    }

    const totalCost = costPerDay * days;
    return totalCost;
}
const daysRented = 2;
const carType = 'luxury';
totalCost = rentalCost(daysRented , carType);
console.log("Total cost : Rs ",totalCost, "/-");