// Implementation of a guess the quote game for learning sign language
// by: Zoe Tagboto

let quotes = ["FORTUNE FAVORS THE BOLD", "WHATEVER YOU ARE BE A GOOD ONE", "GROW WHAT YOU GO THROUGH", "FALL SEVEN TIMES, STAND UP EIGHT", "LET IT BE", "NO PAIN NO GAIN", "I CAN AND I WILL", "THIS TOO SHALL PASS", "THE BEST IS YET TO COME"]
let guess_quote = '';

function startGame() {
    showRandomQuote();
}

function showCards(quote) {
    guess_quote = quote;
    document.getElementById("arena").innerHTML = getAsQuote(quote);
    document.getElementById("arena").style = "";
}

function showRandomQuote() {
    const quote = randomQuote(quotes[5]);
    showCards(quote);
}

function randomQuote() {
    rand = quotes[Math.floor(Math.random() * 8)];
    console.log(rand);
    return rand;

}

function getAsQuote(quote) {
    var quoteArray = [];

    for (var i = 0; i < quote.length; i++) {
        var char = quote[i];
        if (char != " ") {
            quoteArray.push("<img src=\"images/asl/" + char + ".jpg\" height='120' alt =''>")
        } 

        else{
            quoteArray.push("<img src=\"images/asl/" + "space" + ".jpg\" height='120' alt =''>")
        }
        
    }

    return quoteArray
}


function getImageFeedback(valid) {
    if (valid) {
        return "<img src=\"images/correct.jpg\" height='30' alt=''>";
    } else {
        return "<img src=\"images/wrong.jpg\" height='30' alt=''>";
    }
}

function keyFeedback(key) {
    if (!key.toUpperCase().match(/[A-Z]/)) {
        return;
    }

    document.getElementById("arena-feedback").innerHTML = key.toUpperCase();

    const valid = guess_quote.toUpperCase() === key.toUpperCase();
    document.getElementById("arena-feedback").innerHTML += getImageFeedback(valid);
}


