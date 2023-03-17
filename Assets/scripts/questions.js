// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "b",
    
    a: "Hyper Text Preprocessor",
    b: "Hyper Text Markup Language",
    c: "Hyper Text Multiple Language",
    d:  "Hyper Tool Multi Language"
    
  },
    {
    numb: 2,
    question: "What does CSS stand for?",
    answer: "c",
  
    a:  "Common Style Sheet",
    b:  "Cascading Style Sorting",
    c:  "Computer Style Sheet",
    d:  "Cascading Style Sheet"
    
  },
    {
    numb: 3,
    question: "What does PHP stand for?",
    answer: "a",
    
    a:  "Hypertext Preprocessor",
    b:  "Hypertext Programming",
    c:  "Hypertext Preprogramming",
    d:  "Hometext Preprocessor"
    
  },
    {
    numb: 4,
    question: "What does SQL stand for?",
    answer: "d",
    
    a:  "Stylish Question Language",
    b:  "Stylesheet Query Language",
    c:  "Statement Question Language",
    d:  "Structured Query Language"
    
  },
    {
    numb: 5,
    question: "What does XML stand for?",
    answer: "a",
    
    a:  "eXtensible Markup Language",
    b:  "eXecutable Multiple Language",
    c:  "eXTra Multi-Program Language",
    d:  "eXamine Multiple Language"
    
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  {
  numb: 6,
  question: "What is the git commit code in terminal ",
  answer: "b",

  a:  "git commit -p",
  b:  "git commit -m",
  c:  "git commit -c",
  d:  "git commit -n"
  
  },
]

var background = document.querySelector("body");
var startBtn = document.querySelector("#start-btn");
var quizEl = document.querySelector(".quiz-container");
var endEl = document.querySelector(".end");
var scoreEl = document.querySelector(".score");
var questionCounter = 0;
var currentScore = 99;
var highScores = [];

// starts score counter upon quiz start
var scoreCounter = function() {
    scoreEl.textContent = "Current score: 100"

    var scoreInterval = setInterval(function() {
        if (currentScore > 0 && questionCounter < codeQuiz.length) {
            scoreEl.textContent = "Current score: " + currentScore;
            currentScore--
        }
        else {
            clearInterval(scoreInterval);
            endQuiz();
        }
    }, 1000);
}

var createQuiz = function() {
    document.querySelector("#instructions").remove();
    quizEl.classList.remove("hide")

    nextQues(questionCounter);
    scoreCounter();
}

// iterates through questions and answers
var nextQues = function(index) {
    var questionHeader = document.querySelector(".question-header");
    var questionEl = document.querySelector(".question");
    var btnA = document.getElementById("btn-a");
    var btnB = document.getElementById("btn-b");
    var btnC = document.getElementById("btn-c");
    var btnD = document.getElementById("btn-d");

    questionHeader.textContent = "Question #" + parseInt(index + 1)
    questionEl.textContent = codeQuiz[index].question;
    btnA.textContent = codeQuiz[index].a;
    btnB.textContent = codeQuiz[index].b;
    btnC.textContent = codeQuiz[index].c;
    btnD.textContent = codeQuiz[index].d;

    btnA.addEventListener("click", checkAnswer);
    btnB.addEventListener("click", checkAnswer);
    btnC.addEventListener("click", checkAnswer);
    btnD.addEventListener("click", checkAnswer);
}

var checkAnswer = function(event) {
    var clickedBtn = event.target.getAttribute("value");
    var feedbackEl = document.querySelector(".feedback");
    feedbackEl.classList.remove("hide");
    
    // checks button value against correct answer in array
    if (clickedBtn === codeQuiz[questionCounter].answer) {
        background.className = "correct";
        feedbackEl.textContent = "CORRECT!"
    }
    else {
        if (currentScore >= 5) {
            currentScore -= 5;
            scoreEl.textContent = "Current score: " + currentScore;
            }
        background.className = "incorrect";
        feedbackEl.classList.remove("hide");
        feedbackEl.textContent = "INCORRECT!"
    }

    questionCounter++

    if (questionCounter < codeQuiz.length) {        
        nextQues(questionCounter);
    }
    else {
        endQuiz();
    }
}

var endQuiz = function() {
    quizEl.remove();
    scoreEl.remove();
 
    endEl.innerHTML = "<h2 class='end-title'>That's all she wrote!</h2><p>Your final score is " + currentScore + ".  Please enter your name.</p>";

    var scoreForm = document.createElement("form");
    scoreForm.id = "score-form";
    endEl.appendChild(scoreForm);

    var nameInput = document.createElement("input");
    nameInput.className = "name-input";
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("name", "player-name");
    nameInput.setAttribute("placeholder", "ENTER YOUR NAME");
    scoreForm.appendChild(nameInput);

    var nameBtn = document.createElement("button");
    nameBtn.className = "btn";
    nameBtn.id = "name-btn"
    nameBtn.textContent = "SUBMIT";
    scoreForm.appendChild(nameBtn);

    nameBtn.addEventListener("click", saveScore);
}

var saveScore = function() {
    event.preventDefault()

    var playerName = document.querySelector("input[name='player-name']").value;

    if (!playerName) {
        alert("Please enter your name!")
    }
    else {
        var scoreObj = {
            name: playerName,
            score: currentScore
        }
    
        highScores.push(scoreObj);
        document.querySelector("#score-form").reset();
        localStorage.setItem("scores", JSON.stringify(highScores));
        document.location.href = "highscore.html";
    }
}

var loadScores = function() { 
    highScores = localStorage.getItem("scores");

    if (!highScores) {
        highScores = [];
        return false;
    }

    highScores = JSON.parse(highScores);
}

loadScores();
startBtn.addEventListener("click", createQuiz)

;