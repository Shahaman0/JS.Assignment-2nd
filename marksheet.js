// Marksheet
// Get user input for marks in different subjects
let mathsMarks = parseFloat(prompt("Enter marks in Maths: "));
let physicsMarks = parseFloat(prompt("Enter marks in Physics: "));
let chemistryMarks = parseFloat(prompt("Enter marks in Chemistry: "));

// Calculate total and percentage
let totalMarks = mathsMarks + physicsMarks + chemistryMarks;
let percentage = (totalMarks / 300) * 100;

// Determine the grade based on the percentage
let grade;
if (percentage >= 90) {
    grade = 'A+';
} else if (percentage >= 80) {
    grade = 'A';
} else if (percentage >= 70) {
    grade = 'B';
} else if (percentage >= 60) {
    grade = 'C';
} else if (percentage >= 50) {
    grade = 'D';
} else {
    grade = 'F';
}

// Display the MarkSheet
console.log("MarkSheet");
console.log("Maths: " + mathsMarks);
console.log("Physics: " + physicsMarks);
console.log("Chemistry: " + chemistryMarks);
console.log("Total Marks: " + totalMarks);
console.log("Percentage: " + percentage.toFixed(2) + "%");
console.log("Grade: " + grade);