/**
 * Problem Statement
Write a program that:
1. Accepts a list of student names and their scores.
2. Uses a function to calculate a grade based on the score:
90–100: A
80–89: B
70–79: C
60–69: D
<60: F
3. Stores the students and their grades in an array.
4. Displays each student’s name, score, and grade using a loop.
5. Uses conditions (if, else if) inside the grading function.
6. Bonus: Add logic to find and print the highest score and the average score.
Requirements
Use arrays to store student data.
Use functions for grade calculation and average score.
Use variables for storing input/output data.
Use loops to iterate over student records.
Use conditional statements to determine letter grades.
 */



const studentList = [
    {name:"Boma", score: 75},
    {name: "John", score: 69},
    {name: "Nora", score: 87},
    {name: "Adam", score: 97},
    {name: "Eve", score: 60},
    {name: "Jonathan", score: 50},
    {name: "Adamu", score: 70},
    {name: "Bam", score: 90},
]

function calculateGrade(score){
    if(score >= 90 && score <=100){
        return "A"
    } else if(score >= 80 && score <= 89){
        return "B"
    } else if (score >= 70 && score <= 79){
        return "C"
    } else if (score >= 60 && score <= 69){
        return "D"
    } else {
        return "F"
    }
}

// Example 1
// function aggregateStudentScores(students){
//     let lastStudent = students.length -1;
//     let student = students[lastStudent];
//     let name = student.name;
//     let score = student.score;
//     console.log(name)
//     console.log(score)
//     let grade = calculateGrade(score)
//     console.log(grade)
//     console.log(students.length)
// }

// aggregateStudentScores(studentList)

function aggregateStudentScores(students){
    for(let i = 0; i < students.length; i++){
        let currentStudent = i;
        let student = students[currentStudent];
        let name = student.name;
        let score = student.score;
        let grade = calculateGrade(score)
        console.log(`Name: ${name}, Score: ${score}, Grade: ${grade}`)
    }
}

aggregateStudentScores(studentList)