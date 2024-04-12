function calculator(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                console.log("Error: Cannot divide by zero!");
                return;
            }
            break;
        default:
            console.log("Error: Invalid operator");
            return;
    }
    console.log(`Result: ${result}`);
}

calculator(10, 5, '+'); // Addition
calculator(10, 5, '-'); // Subtraction
calculator(10, 5, '*'); // Multiplication
calculator(10, 5, '/'); // Division
calculator(10, 0, '/'); // Division by zero error
calculator(10, 5, '%'); // Invalid operator
