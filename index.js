console.log("Hello World.");

generateRandomNumber(30);
function generateRandomNumber (max) {
    let randomNum = Math.floor(Math.random() * max) +1;

    if(randomNum >= 5) {
        console.log(`Random Number is > = 5`);
    } else{
        console.log(`Random Number is < = 5`);
    }

    if(randomNum <= 15 ) {
        console.log(`Random Number ${randomNum} is in B. 1 - 15`);
    }
    else if (randomNum >= 16 && randomNum <= 30) {
        console.log(`Random Number ${randomNum} is in I. 16 - 30`);
    } 
    else if (randomNum >= 31 && randomNum <= 45){
        console.log(`Random Number ${randomNum} is in N. 31 - 45`);
    }
    else if (randomNum >= 46 && randomNum <= 61){
        console.log(`Random Number ${randomNum} is in G. 46 - 61`);
    }
    else if (randomNum >= 61 && randomNum <= 75){
        console.log(`Random Number ${randomNum} is in O. 61 - 75`);
    }
    
    }
    
