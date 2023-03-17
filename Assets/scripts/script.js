let words = [
  "Child",
  "Think",
  "Thing",
  "Unite",
  "Voice",
  "Swing",
  "Trial",
  "Trick",
  "Sling",
  "Prick",
  "Noisy",
  "Exile",
  "Being",
  "Align",
  "Axial",
  "Brick",
  "Chick",
  "Daily",
  "Drink",
  "Fairy",
  "Glide",
  "Rover",
  "Racer",
  "Hyper",
  "Joker",
  "Laser",
  "Hover",
  "Power",
  "Owler",
  "Fixer",
  "Boxer",
  "Cyber",
  "Duper",
  "Eager",
  "Baker",
  "Later",
  "Tales",
  "Tesla",
  "Stale",
  "Least",
  "Slate"
];

let alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

var highScores = [];
var scoreTableEl = document.querySelector("#score-table");

var loadScores = function() { 
    highScores = localStorage.getItem("scores");

    if (!highScores) {
        highScores = []

        var noScores = document.createElement("div");
        noScores.setAttribute("style", "text-align: center");
        noScores.textContent = "There are no scores yet!  Play the quiz to add your score!"
        document.querySelector("#score-card").appendChild(noScores);

        return false;
    }

    highScores = JSON.parse(highScores);
    highScores.sort(compare);
}

var compare = function(a, b) {
    var scoreA = parseInt(a.score);
    var scoreB = parseInt(b.score);

    var comparison = 0;
    if (scoreA < scoreB) {
        comparison = 1;
    } else if (scoreA > scoreB) {
        comparison = -1;
    }
    return comparison;
}


var createScoreTable = function() {

    for (var i = 0; i < highScores.length; i++){ 
        var scoreRow = document.createElement("tr");
        scoreTableEl.appendChild(scoreRow);
    
        var nameCell = document.createElement("td");
        nameCell.className = "table-name-data";
        nameCell.textContent = highScores[i].name;
        scoreRow.appendChild(nameCell);
    
        var scoreCell = document.createElement("td");
        scoreCell.className = "table-score-data";
        scoreCell.setAttribute("style", "text-align: right")
        scoreCell.textContent = highScores[i].score;
        scoreRow.appendChild(scoreCell);
    }

}

loadScores();
createScoreTable();