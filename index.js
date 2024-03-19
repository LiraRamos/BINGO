console.log("Hello World.");
let B = false,
    I = false,
    N = false,
    G = false,
    O = false;

    generateRandomNumber(75)
function generateRandomNumber (max) {
   //return random number 0-10;
    let randomNum = Math.floor(Math.random() * max) + 1; 

// if ... else if ... else statement
// if (condition) {block og code to execute}
// ==, !, =, >, <, >=, <=, &&, ||

if(randomNum <= 15) {
   B = true;
    console.log(`Random Number ${randomNum} is in B. 1 - 15`);
 } else if (randomNum >= 16 && randomNum <= 30) {
   I = true;
    console.log(`Random Number ${randomNum} is in I. 16 - 30`);
 } else if (randomNum >= 31 && randomNum <= 45) {
   N = true;
    console.log(`Random Number ${randomNum} is in N. 31 - 45`);
 } else if (randomNum >= 46 && randomNum <= 61) {
   G = true
    console.log(`Random Number ${randomNum} is in G. 46 - 61`);
 }  else if (randomNum >= 61 && randomNum <= 75) {
   O = true
    console.log(`Random Number ${randomNum} is in O. 61 - 75`);
 } else {
    return console.log(`Random number is invalid.`);
 }

 if ( B == true && I == true && N == true && G == true && O == true) {
   console.log("Bingo!!!!");
}

}
