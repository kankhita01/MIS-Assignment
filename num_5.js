var name = prompt("Enter your name:");
var totalTuitionFees = parseFloat(prompt("Enter your total tuition fees:"));
var birthYear = parseInt(prompt("Enter your birth year:"));

if (totalTuitionFees > 50000 && age > 21) {
    discountRate = 0.15;
    var discountAmount = totalTuitionFees * discountRate;
    var payableTuitionFees = totalTuitionFees - discountAmount;
    console.log("Name:" +name "Discount Amount is:" + discountAmount , "Payble Tution Fees:" + payableTuitionFees)
} else if (totalTuitionFees > 40000 && age > 20) {
    discountRate = 0.10;
    var discountAmount = totalTuitionFees * discountRate;
    var payableTuitionFees = totalTuitionFees - discountAmount;
    console.log("Name:" +name "Discount Amount is:" + discountAmount , "Payble Tution Fees:" + payableTuitionFees)  
} else if (totalTuitionFees > 30000 && age > 19) {
    discountRate = 0.05;
    var discountAmount = totalTuitionFees * discountRate;
    var payableTuitionFees = totalTuitionFees - discountAmount;
    console.log("Name:" +name "Discount Amount is:" + discountAmount , "Payble Tution Fees:" + payableTuitionFees)
} else {
    discountRate = 0.02;
    var discountAmount = totalTuitionFees * discountRate;
    var payableTuitionFees = totalTuitionFees - discountAmount;
    console.log("Name:" +name "Discount Amount is:" + discountAmount , "Payble Tution Fees:" + payableTuitionFees)
}

var discountAmount = totalTuitionFees * discountRate;
var payableTuitionFees = totalTuitionFees - discountAmount;