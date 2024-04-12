// Define a customer account object
const customerAccount = {
    name: "Arpit",
    balance: 1000,
};

// Function to deposit money into the account
function deposit(amount) {
    // Check if amount is positive
    if (amount > 0) {
        // Update the balance
        this.balance += amount;
        console.log(`Deposited ${amount} into ${this.name}'s account.`);
    } else {
        console.log("Invalid deposit amount.");
    }
}

// Function to withdraw money from the account
function withdraw(amount) {
    // Check if amount is positive and not greater than balance
    if (amount > 0 && amount <= this.balance) {
        // Update the balance
        this.balance -= amount;
        console.log(`Withdrawn ${amount} from ${this.name}'s account.`);
    } else {
        console.log("Invalid withdrawal amount or insufficient balance.");
    }
}

// Bind functions to the customer account object
customerAccount.deposit = deposit;
customerAccount.withdraw = withdraw;

console.log("Initial balance:", customerAccount.balance);

customerAccount.deposit(500); // Deposit $500
console.log("Updated balance after deposit:", customerAccount.balance);

customerAccount.withdraw(200); // Withdraw $200
console.log("Updated balance after withdrawal:", customerAccount.balance);

customerAccount.withdraw(1500); // Attempt to withdraw more than balance
console.log("Updated balance after invalid withdrawal:", customerAccount.balance);
