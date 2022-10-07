// inspireMeGenerator //

// Get message one //
function returnQuoteOne(quotesArray) {
    let i = Math.floor(Math.random()* 4)
    let quote = quotesArray[i];
    return quote;
    
}

let numberOne = returnQuoteOne(['t', 'e', 's', 't']);

// Attempting to make function with for loop work

// Get message two //

function returnQuoteTwo(secondQuotesArray) {
    let j = Math.floor(Math.random()* 4)
    let quote = secondQuotesArray[j];
    return quote;
    }
let numberTwo = returnQuoteTwo(['a', 'b', 'c', 'd']);

// Get message three //

function returnQuoteThree(thirdQuotesArray) {
    let k = Math.floor(Math.random()* 4)
    let quote = thirdQuotesArray[k];
    return quote;
    }
let numberThree = returnQuoteThree(['w', 'x', 'y', 'z']);

// Return message //
function printAllQuotes() {
    console.log(numberOne, numberTwo, numberThree);
}

printAllQuotes();

