// Implementation of a guess the word game for learning sign language

let words = ["computer", "again", "always", "angry", "balloon", "bad", "toilet", "start", "candy", "careless", "change",
    "cheap", "church", "cold", "dead", "deaf", "find", "easy", "email", "finish", "rubbish", "graduate",
    "habit", "happy", "need", "homework", "hurt"]

let guess_word = '';

function startGame() {
    
    getRandomWord();
 
    var x = document.getElementById("myForm");
    var y = document.getElementById("word");
    var z = document.getElementById("myButton");
    var next = document.getElementById("next");

    if (x.style.display === "none" && y.style.display === "none" && z.style.display === "none" && next.style.display === "none") {
        x.style.display = "block";
        y.style.display = "block";
        z.style.display = "block";
        next.style.display = "block";
    }
    else {

        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
        next.style.display = "none";
    }
}

function next() {

    document.getElementById("validate").innerHTML = " ";
    document.getElementById("word").value = "";
    getRandomWord();

}

function showGifWord(word) {

    guess_word = word;
    document.getElementById("arena").innerHTML = getInSign(word);
    document.getElementById("arena").style = "";
}

function getRandomWord() {

    const word = randomWord(words[26]);
    showGifWord(word);
}

function randomWord() {

    rand = words[Math.floor(Math.random() * 26)];
    return rand;

}
function getInSign(word) {

    return "<img src=\"images/asl_gifs/" + word + ".gif\" height='400' alt =''>"
}

function getImageFeedback(valid) {

    if (valid) {

        return "<img src=\"images/correct.jpg\" height='30' alt=''>";
    } else {

        return "<img src=\"images/wrong.jpg\" height='30' alt=''>";

    }

}

function keyFeedback() {

    const valid = document.getElementById("word").value.toUpperCase() == guess_word.toUpperCase();
    console.log(valid);
    document.getElementById("validate").innerHTML = getImageFeedback(valid);
}


