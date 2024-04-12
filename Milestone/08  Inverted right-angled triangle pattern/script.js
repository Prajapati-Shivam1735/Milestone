/*
let n = 5;
for (let i = n; i >= 1; i--) {
	let str = "* ";
	console.log(str.repeat(i));
}
*/
let n = 5; // row or column count
let string = "";
for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
        string += "*";
    }
    string += "\n"; 
}
console.log(string);
