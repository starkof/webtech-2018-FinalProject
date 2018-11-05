// Implementation of a guess the quote game for learning sign language
// by: Zoe Tagboto

let quotes = ["FORTUNE FAVORS THE BOLD", "WHATEVER YOU ARE BE A GOOD ONE", "GROW WHAT YOU GO THROUGH", "FALL SEVEN TIMES, STAND UP EIGHT", "LET IT BE", "NO PAIN NO GAIN", "I CAN AND I WILL", "THIS TOO SHALL PASS", "THE BEST IS YET TO COME"]
let guess_quote = '';

function startGame() {
    getRandomQuote();
    //document.getElementById("myForm").innerHTML = "My Answer:"+;
    var x = document.getElementById("myForm");
    var y = document.getElementById("famousQuote");
    var z = document.getElementById("myButton");
    if (x.style.display === "none" &&y.style.display=== "none" && z.style.display=== "none" ){
        x.style.display = "block";
        y.style.display = "block";
        z.style.display = "block";
    } 
    else {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
    }
}

function showSignQuote(quote) {
    guess_quote = quote;
    document.getElementById("arena").innerHTML = getInSign(quote);
    document.getElementById("arena").style = "";
}

function getRandomQuote() {
    const quote = randomQuote(quotes[5]);
    showSignQuote(quote);
}

function randomQuote() {
    rand = quotes[Math.floor(Math.random() * 8)];
    //console.log(rand);
    return rand;

}
function getInSign(quote) {
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

function keyFeedback() {
   
    const valid = document.getElementById("famousQuote").value.toUpperCase() == guess_quote.toUpperCase();
    console.log(valid);

    document.getElementById("validate").innerHTML = getImageFeedback(valid);


    //console.log(getImageFeedback(valid));
}


