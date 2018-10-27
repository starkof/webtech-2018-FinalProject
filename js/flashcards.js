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
let tutorial_delay = 3000;

function tutorialStep(count){
    // console.log(count);
    showCard(alphabets[count.i]);
    document.getElementById("arena-feedback").innerHTML = alphabets[count.i];
    count.i += 1;
}

function runTutorial(){
    count = {i: 0};
    const tutorialInterval = setInterval(function(){tutorialStep(count)}, tutorial_delay, count);
    setTimeout(function(){
        clearInterval(tutorialInterval);
        document.getElementById("arena-feedback").innerHTML = "";
        document.getElementById("arena").innerHTML =
        '<div id="arena" class="col-sm text-center" style="margin-top: 240px">' +
            '<button type="button" onclick="runTutorial()">Tutorial</button>' +
            '<button type="button" onclick="startGame()">Start Game</button>' +
        '<div>';
        }, tutorial_delay*alphabets.length + 500);
}

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
    // runTutorial();
    showRandomCard();
}

function showCard(letter){
    guess_letter = letter;
    document.getElementById("arena").innerHTML = getAslLetter(letter);
    document.getElementById("arena").style = "";
    // console.log(letter);
}

function showRandomCard() {
    const letter = randomLetter(alphabets[5]);
    showCard(letter);
    time_remaining = 10;
    document.getElementById("arena-timer").innerHTML = "Timer: 0:" + time_remaining.toString();
    timer_id = startTimer();
}

function nextCard(){
    if (rounds > 1) {
        document.getElementById("arena-feedback").innerHTML = "";
        clearTimeout(timer_id);
        showRandomCard();
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
    if (!key.toUpperCase().match(/[A-Z]/)){
        return;
    }

    document.getElementById("arena-feedback").innerHTML = key.toUpperCase();
    // console.log(guess_letter.toUpperCase());
    // console.log(key.toUpperCase());

    const valid = guess_letter.toUpperCase() === key.toUpperCase();
    document.getElementById("arena-feedback").innerHTML += getImageFeedback(valid);
    if (valid){
        increaseScore(1);
        setTimeout(nextCard, next_card_delay);
    } else {
        setTimeout(nextCard, next_card_delay);
    }
}
