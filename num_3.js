var number1 = parseFloat(prompt("Enter the first number: "));
var number2 = parseFloat(prompt("Enter the second number: "));
var number3 = parseFloat(prompt("Enter the third number: "));

if (num1>= num2 && num1 >= num3){
    maxNum = number1; 
} else if(num2>= num1 && num2 >= num3){
    maxNum = number2;
} else{
    maxNum = number3
}

console.log("The max number is: " + maxNum);