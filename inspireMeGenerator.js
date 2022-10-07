// inspireMeGenerator //

// Get message one //
function returnQuoteOne(quotesArray) {
    let i = Math.floor(Math.random()* 4)
    console.log(i);
    let numberOne = 'Test 1';
    return numberOne;
}

// Attempting to make function with for loop work

let numberOne = returnQuoteOne();

// Get message two //

function returnQuoteTwo(secondQuotesArray) {
    let j = Math.floor(Math.random()* 4)
    console.log(j);
    let numberTwo = 'Test 2';
    return numberTwo;
}
let numberTwo = returnQuoteTwo();

// Get message three //

function returnQuoteThree(thirdQuotesArray) {
    let k = Math.floor(Math.random()* 4)
    console.log(k);
    let numberThree = 'Test 3';
    return numberThree;
}
let numberThree = returnQuoteThree();

// Return message //
function printAllQuotes() {
    console.log(numberOne, numberTwo, numberThree);
}

printAllQuotes();

