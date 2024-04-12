const generateRandomNumber = (() => {
    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    
    // Return the random number
    return randomNumber;
})();

// Display the generated random number
console.log("Random Number:", generateRandomNumber);
