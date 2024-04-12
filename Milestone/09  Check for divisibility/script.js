function printNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (num % 3 === 0 && num % 2 !== 0) {
            console.log(num);
        }
    }
}

const numbers = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];
console.log("Numbers divisible by 3 but not by 2:");
printNumbers(numbers);
