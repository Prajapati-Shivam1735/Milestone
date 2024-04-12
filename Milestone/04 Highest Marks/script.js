const marks = [75, 90, 68, 92, 81];

let highestMarks = marks[0];

for (let i = 1; i < marks.length; i++) {
    highestMarks = marks[i] > highestMarks ? marks[i] : highestMarks;
}

console.log("The highest marks scored by a student in the class: " + highestMarks);
