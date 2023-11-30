// Author:
// Sebastian Jaculbe

console.log("Starting Student Grade Calculator");

function calculateGrade() {
    console.log("Calculate Grade");

    let className1 = document.getElementById("input11").value;
    let className2 = document.getElementById("input21").value;
    let className3 = document.getElementById("input31").value;
    let className4 = document.getElementById("input41").value;
    let className5 = document.getElementById("input51").value;
    
    console.log(document.getElementById("input11").value);
    console.log(document.getElementById("input21").value);
    console.log(document.getElementById("input31").value);
    console.log(document.getElementById("input41").value);
    console.log(document.getElementById("input51").value);

    // Credits to ChatGPT for this line of code.
    let numberOfClasses = [className1, className2, className3, className4, className5].length;
    console.log("Number of Classes: " + numberOfClasses)

    // Credits to ChatGPT for the parseFloat.
    var grade1 = parseFloat(document.getElementById("input13").value);
    var grade2 = parseFloat(document.getElementById("input23").value);
    var grade3 = parseFloat(document.getElementById("input33").value);
    var grade4 = parseFloat(document.getElementById("input43").value);
    var grade5 = parseFloat(document.getElementById("input53").value);

    console.log(document.getElementById("input13").value);
    console.log(document.getElementById("input23").value);
    console.log(document.getElementById("input33").value);
    console.log(document.getElementById("input43").value);
    console.log(document.getElementById("input53").value);
    

    var totalPercentageGrade = grade1 + grade2 + grade3 + grade4 + grade5;
    var totalLetterGrade = " ";
    avg = Math.round(totalPercentageGrade / numberOfClasses);
    console.log("Total Percentage Grade: " + totalPercentageGrade);
    console.log("Average Percentage: " + avg);

    if (avg >= 90) {
        totalLetterGrade = "A";
    } else if (avg >= 80 && avg < 90) {
        totalLetterGrade = "B";
    } else if (avg >= 70 && avg < 80) {
        totalLetterGrade = "C";
    } else if (avg >= 65 && avg < 70) {
        totalLetterGrade = "D";
    } else if (avg < 65) {
        totalLetterGrade = "F";
    }
    console.log("Total Letter Grade: " + totalLetterGrade);

    document.getElementById("letterGrade").innerHTML = totalLetterGrade;
    document.getElementById("percentageGrade").innerHTML = avg;

}