// Implementation of a flash cards game for learning sign language
// by: Stephan N. Ofosuhene

let alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
                    'U', 'V', 'W', 'X', 'Y', 'Z'];
let guess_letter = '';

function startGame(){
    const letter = randomLetter(alphabets[5]);
    guess_letter = letter;
    document.getElementById("arena").innerHTML = getAslLetter(letter);
    document.getElementById("arena").style = "";
}

function randomLetter(){
    return alphabets[Math.floor(Math.random() * 25)];
}

function getAslLetter(letter){
    return "<img src=\"images/asl/" + letter + ".jpg\" height='400' alt=''>";
}

function keyFeedback(key){
    document.getElementById("arena-feedback").innerHTML = key.toUpperCase();
    console.log(guess_letter.toUpperCase());
    console.log(key.toUpperCase());
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
