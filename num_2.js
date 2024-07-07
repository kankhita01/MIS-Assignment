var person1 = prompt ("Enter your name:");
var age = parseInt(prompt ("Enter your age:") ); 

if (age >= 18) {
    console.log ("Hello ", person1 , ", you are eligible to VOTE today.");
}
else {
    console.log("Hello ", person1, ", sorry to let you know that, you can't VOTE today."); 
}