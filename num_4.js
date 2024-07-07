var mark = parseInt(prompt("Enter Total Mark: ") );
var grade;

 if (mark >= 90 && mark <= 100) {
   grade = "A";
 }
 else if (mark >= 85 && mark <= 89){
    grade = "A-";
 }
 else if (mark >= 80 && mark <= 84){
    grade = "B+";
 }
 else if (mark >= 75 && mark <= 79){
    grade = "B";
 }
 else if (mark >= 70 && mark <= 74){
    grade = "B-";
 }
 else if (mark >= 65 && mark <= 69){
    grade = "C+";
 }
 else if (mark >= 60 && mark <= 64){
    grade = "C";
 }
 else if (mark >= 55 && mark <= 59){
    grade = "C-";
 }
 else if (mark >= 50 && mark <= 54){
    grade = "D+";
 }
 else if (mark >= 45 && mark <= 49){
    grade = "D";
 }
 else {
    grade = "F";
 }

 console.log ("your grade is: " + grade);