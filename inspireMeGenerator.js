// inspireMeGenerator //

// Get message one //
function returnQuoteOne(quotesArray) {
    let i = Math.floor(Math.random()* 4)
    let quote = quotesArray[i];
    return quote;
    
}

// Declaring with long list of quotes

let numberOne = returnQuoteOne([`You've got to get up every morning with determination if you're going to go to bed with satisfaction. — George Lorimer.`,
 `Education is the most powerful weapon which you can use to change the world. — Nelson Mandela.`, 
 `The most difficult thing is the decision to act, the rest is merely tenacity. — Amelia Earhart.`,
  `You’ll find that education is just about the only thing lying around loose in this world, and it’s about the only thing a fellow can have as much of as he’s
   willing to haul away. — John Graham.`]);



// Get message two //

function returnQuoteTwo(secondQuotesArray) {
    let j = Math.floor(Math.random()* 4)
    let quote = secondQuotesArray[j];
    return quote;
    }

// Declaring with long list of quotes

let numberTwo = returnQuoteTwo([`5.	Take the attitude of a student, never be too big to ask questions, never know too much to learn something new. — Augustine Og Mandino.`,
 `The greatest discovery of my generation is that a human being can alter his life by altering his attitudes. — William James.`,
  `One of the differences between some successful and unsuccessful people is that one group is full of doers, while the other is full of wishers. — Edmond Mbiaka.`,
   `I’d rather regret the things I’ve done than regret the things I haven’t done. — Lucille Ball.`]);

// Get message three //

function returnQuoteThree(thirdQuotesArray) {
    let k = Math.floor(Math.random()* 4)
    let quote = thirdQuotesArray[k];
    return quote;
    }

// Declaring with long list of quotes

let numberThree = returnQuoteThree([`You cannot plow a field by turning it over in your mind. To begin, begin. ― Gordon B. Hinckley.`,
 `When you arise in the morning think of what a privilege it is to be alive, to think, to enjoy, to love… – Marcus Aurelius.`,
 `Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice. – Wayne Dyer.`,
`Your Monday morning thoughts set the tone for your whole week. See yourself getting stronger, and living a fulfilling, happier & healthier life. – Germany Kent.`]);

// Return message //
function printAllQuotes() {
    console.log(numberOne, numberTwo, numberThree);
}

printAllQuotes();

