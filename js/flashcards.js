// Implementation of a flash cards game for learning sign language
// by: Stephan N. Ofosuhene

let alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
                    'U', 'V', 'W', 'X', 'Y', 'Z'];
let guess_letter = '';
let score = 0;
let time_remaining = 10;
let timer_id = 0;
let next_card_delay = 800;
let rounds = 10;

// add validation to ensure only alphabets are input
// add sound

function timer(){
    time_remaining -= 1;
    if (time_remaining < 10){
        document.getElementById("arena-timer").innerHTML = "Timer: 0:0" + time_remaining.toString();
    } else {
        document.getElementById("arena-timer").innerHTML = "Timer: 0:" + time_remaining.toString();
    }
    if (time_remaining === 0){
        setTimeout(nextCard, next_card_delay);
    }
}

function increaseScore(n){
    score += n;
    document.getElementById("arena-score").innerHTML = "Score: " + score.toString();
}

function startTimer(){
    return setInterval(timer, 1000);
}

function startGame(){
    showCard();
}

function showCard() {
    const letter = randomLetter(alphabets[5]);
    guess_letter = letter;
    document.getElementById("arena").innerHTML = getAslLetter(letter);
    document.getElementById("arena").style = "";
    time_remaining = 10;
    document.getElementById("arena-timer").innerHTML = "Timer: 0:" + time_remaining.toString();
    timer_id = startTimer();
}

function nextCard(){
    if (rounds > 1) {
        document.getElementById("arena-feedback").innerHTML = "";
        clearTimeout(timer_id);
        showCard();
        rounds -= 1;
    } else {
        document.getElementById("arena").innerHTML = "Game Over!";
        document.getElementById("arena").style = "padding-top: 230px";
        clearTimeout(timer_id);
        document.getElementById("arena-feedback").innerHTML = "";
    }
}

function randomLetter(){
    return alphabets[Math.floor(Math.random() * 25)];
}

function getAslLetter(letter){
    return "<img src=\"images/asl/" + letter + ".jpg\" height='400' alt=''>";
}

function getImageFeedback(valid){
    if (valid){
        return "<img src=\"images/correct.jpg\" height='30' alt=''>";
    } else {
        return "<img src=\"images/wrong.jpg\" height='30' alt=''>";
    }
}

function keyFeedback(key){
    document.getElementById("arena-feedback").innerHTML = key.toUpperCase();
    console.log(guess_letter.toUpperCase());
    console.log(key.toUpperCase());

    const valid = guess_letter.toUpperCase() === key.toUpperCase();
    document.getElementById("arena-feedback").innerHTML += getImageFeedback(valid);
    if (valid){
        increaseScore(1);
        setTimeout(nextCard, next_card_delay);
    } else {
        setTimeout(nextCard, next_card_delay);
    }
}

// function count(n){
//     document.getElementById("par").innerHTML = n;
// }
//
// function doCount(){
//     for (let i = 0; i < 10; i++){
//         setTimeout(count, 1000, i);
//     }
// }
//
// function wait(millis){
//     setTimeout(function(){}, millis);
// }
