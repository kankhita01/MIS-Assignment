var char = prompt("Enter a single character:");

char = char.toUpperCase();
const vowels = ['A', 'E', 'I', 'O', 'U'];

if (vowels.includes(char)) {
    console.log(char + " is a vowel.");
} else if(char >= 'A' && char <= 'Z'){
    console.log(char +" is a consonant.");
} else {
    console.log("Invalid input. Please enter a single alphabetic character.");
}