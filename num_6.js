var temp = parseFloat(prompt("Enter the temperature in Celsius:"));

if (temp < 0){
    console.log("Freezing weather");
} else if(temp >= 0 && temp < 10){
    console.log("Very Cold weather");
} else if(temp >= 10 && temp < 20){
    console.log("Cold weather");
} else if(temp >= 20 && temp < 30){
    console.log("Normal in Temp");
} else if (temp >= 30 && temp < 40){
    console.log("It's Hot");
} else if (temp >= 40){
    console.log("It's Very Hot");
} else{
    console.log("Invalid temperature input");
}
