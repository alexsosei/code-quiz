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

let countdown = document.getElementById("timeLeft");
let letter1 = document.getElementById("letter1");
let letter2 = document.getElementById("letter2");
let letter3 = document.getElementById("letter3");
let letter4 = document.getElementById("letter4");
let letter5 = document.getElementById("letter5");
let startButton = document.getElementById("start");
let resetButton = document.getElementById("reset");
let winsSpan = document.getElementById("winsNo");
let losesSpan = document.getElementById("losesNo");
let playArea = document.getElementById("playArea");
let wrongLetterList = document.getElementById("wrongLetters");
let newGame = document.getElementById("newGame");

let wins = 0;
let loses = 0;

function init() {
  const storedWins = localStorage.getItem("wins");
  if (storedWins !== null) {
    wins = storedWins;
    winsSpan.textContent = wins;
  };
    const storedLoses = localStorage.getItem("loses");
  if (storedLoses !== null) {
    loses = storedLoses
    losesSpan.textContent = loses;
  };
};
init();

function updateWins() {
  wins++;
  winsSpan.textContent = wins;
  localStorage.setItem("wins", wins);
};

function updateLoses() {
  loses++;
  losesSpan.textContent = loses;
  localStorage.setItem("loses", loses);
};

newGame.addEventListener("click", function(arr) {
  arr = [letter1, letter2, letter3, letter4, letter5]
  for (var i = 0; i < arr.length; i++) {
    arr[i].className = "lettersQ";
    arr[i].textContent = "_";
  }
  randomWord();
  checkLetters();
  countdownTimer();
  wrongLetterList.textContent = "";
})

startButton.addEventListener("click", function() {
  randomWord();
  checkLetters();
  countdownTimer();
  wrongLetterList.textContent = "";
});

function getRandom(value) {
  return Math.floor(Math.random() * (value));
};

function randomWord(getWord, chosenWord, wordSplit) {
  getWord = words[getRandom(words.length)];
  chosenWord = getWord.toUpperCase();
  wordSplit = chosenWord.split("");
  return wordSplit
};

function checkLetters(chosenWord,l1, l2, l3, l4, l5) {
  chosenWord = randomWord();
  console.log(chosenWord);
  l1 = chosenWord[0];
  l2 = chosenWord[1];
  l3 = chosenWord[2];
  l4 = chosenWord[3];
  l5 = chosenWord[4];
  
  addEventListener("keydown", function(event, typed, check, noX) {
    typed = event.key;
    check = typed.toUpperCase();
    switch(check) {
      case l1:
        letter1.textContent = l1;
        letter1.className = "letters";
      break;
      case l2:
        letter2.textContent = l2;
        letter2.className = "letters";
      break;
      case l3:
        letter3.textContent = l3;
        letter3.className = "letters";
      break;
      case l4:
        letter4.textContent = l4;
        letter4.className = "letters";
      break;
      case l5:
        letter5.textContent = l5;
        letter5.className = "letters";
      break;
      case l1 && l2:
        letter1.textContent = l1;
        letter1.className = "letters";
        letter2.textContent = l2;
        letter2.className = "letters";
      break;
      case l1 && l3:
        letter1.textContent = l1;
        letter1.className = "letters";
        letter3.textContent = l3;
        letter3.className = "letters";
      break;
      case l1 && l4:
        letter1.textContent = l1;
        letter1.className = "letters";
        letter4.textContent = l4;
        letter4.className = "letters";
      break;
      case l1 && l5:
      letter1.textContent = l1;
      letter1.className = "letters";
      letter5.textContent = l5;
      letter5.className = "letters";
      break;
      case l2 && l3:
        letter2.textContent = l2;
        letter2.className = "letters";
        letter3.textContent = l3;
        letter3.className = "letters";
      break;
      case l2 && l4:
      letter2.textContent = l2;
      letter2.className = "letters";
      letter4.textContent = l4;
      letter4.className = "letters";
      break;
      case l2 && l5:
        letter2.textContent = l2;
        letter2.className = "letters";
        letter5.textContent = l5;
        letter5.className = "letters";
      break;
      case l3 && l4:
        letter3.textContent = l3;
        letter3.className = "letters";
        letter4.textContent = l4;
        letter4.className = "letters";
      break;
      case l3 && l5:
        letter3.textContent = l3;
        letter3.className = "letters";
        letter5.textContent = l5;
        letter5.className = "letters";
      break;
      case l4 && l5:
        letter4.textContent = l4;
        letter4.className = "letters";
        letter5.textContent = l5;
        letter5.className = "letters";
    };

    if (check !== l1 && check !== l2 && check !== l3 && check !== l4 && check !== l5 && alphabet.includes(check)) {
      playArea.className = "X";
      setTimeout(function() {
        playArea.className = "noX"
      }, 500);
      key = event.key
      wrongLetterList.textContent += (" " + key.toUpperCase())
    };
  });
};

function countdownTimer(timeLeft, timeInterval) {
  timeLeft = 30;

  timeInterval = setInterval(function () {
    if(letter1.className === "letters" && letter2.className === "letters" && letter3.className === "letters" && letter4.className === "letters" && letter5.className === "letters") {
      updateWins();
      startButton.setAttribute("style", "display: none;")
      wrongLetterList.textContent = "Congratulations, you won!";
      newGame.setAttribute("style", "display: inline;");
      clearInterval(timeInterval);
      return;
    } else if(timeLeft > 0){
      countdown.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } else if (timeLeft === 1) {
      countdown.textContent = timeLeft + " second remaining";
    timeLeft--;
    } else {
      countdown.textContent = "";
      wrongLetterList.textContent = "Sorry, you ran out of time!"
      playArea.className = "X"
      updateLoses();
      clearInterval(timeInterval);
    };
  }, 1000);
  return;
};

resetButton.addEventListener("click", function() {
  wins = -1;
  loses = -1;
  updateWins();
  updateLoses();
  location.reload();
});
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
