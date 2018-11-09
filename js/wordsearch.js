// Implementation of a wordsearch for learning sign language
// by: sourced from https://www.youtube.com/watch?v=6rTWsWMcZ9A&t=1281s

let grid = ["WORDC",
            "SPQRC",
            "FBLZO",
            "UVHAO",
            "NOWTL"];

let wordsToFind = ["WORD", "COOL", "FUN"];

var highlight = [];

function in_path(path, row, col) {
    for (var i = 0; i < path.length; i++) {
        if (path[i].row == row &&
            path[i].col == col) {
            return true;
        }
    }
    return false;
}

function search(row, col, word, path) {
    if (word == "") {
        path.forEach(function (e) {
            highlight[e.row][e.col] = true;

        });
    } else if (0 <= row && row < grid.length
        && 0 <= col && col < grid[row].length &&
        !in_path(path, row, col) &&
        word[0] == grid[row][col]) {

        for (var r = -1; r <= 1; r++) {
            for (var c = -1; c <= 1; c++) {
                search(row + r, col + c, word.substr(1), path.concat({ row: row, col: col }));
            }
        }

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

    
    document.write("</tr>")
    document.write("</table>");

}


//Sourced from https://www.youtube.com/watch?v=6rTWsWMcZ9A&t=1281s;