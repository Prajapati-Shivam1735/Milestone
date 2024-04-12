function countVowels(str) {
    
    str = str.toLowerCase();
    
    
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {    
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    
    return count;
}

const inputString = "Hello, World!";
const vowelCount = countVowels(inputString);
console.log(`The number of vowels in "${inputString}" is: ${vowelCount}`);