// Implementation of a wordsearch for learning sign language
// by: Zoe Tagboto
let grid = ["TBSPCEBOTIUOAA",
"AIROERMOLESDSB",
"CSBNYEOAHTTIIR",
"HEHYBHUWRPFNTB",
"EABEGOBIAVIOAA",
"ECAMWECULVSSBT",
"TRNREHEELNHAAR",
"ASIAARDVARKUNR",
"HIHVTIBBARERTD",
"REPECHAMSTERHS",
"HALNERROZEBRAO",
"EOOWERATOLRFRN",
"SRDREGDABZHAOB",
"RMBRADRHHLNEDI"];

let wordsToFind = ["BEAR","FISH","DINOSAUR","ZEBRA","AARDVARK","ANT","BADGER"
, "CHEETAH", "CROW", "DOLPHIN", "EEL", "HAMSTER", "MOLE", "OSTRICH", "PONY", "RABBIT", "RAVEN"];

var highlight = [];

function search(row, col, word, path) {
    if(word ==""){
        //path.forEach(function(rc))
    }
}

function startGame() {
    for (var i = 0; i < grid.length; i++) {
        highlight[i] = [];
    }

    wordsToFind.forEach(function (word) {
        for (var row = 0; row < grid.length; row++) {
            for (var col = 0; col < grid[row].length; col++) {
                search(row, col, word, []);
            }
        }
    });

    document.write("<table border = '2'>");
    for (var row = 0; row < grid.length; row++) {
        document.write("<tr>");
        for (var col = 0; col < grid[row].length; col++) {
            var color = highlight[row][col] ? "HotPink" : "white";
            document.write("<td align = 'center' bgcolor='" + color + "'>" + "<img src=\"images/asl/" + grid[row][col] + ".jpg\" height='80' alt =''>"
           + "</td>")
        }
    }

    console.log(grid[0][0]);
    document.write("</tr>")
    document.write("</table>");

}
