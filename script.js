var startButton = document.getElementById("start-btn");
var questionContainer = document.getElementById("container");
var questionText = document.getElementById("question");
var answerText = document.getElementById("answer-buttons");
var nextButton = document.getElementById("next-btn");
var result = document.getElementById("result-message");
var time = document.getElementById("timer");
var results = document.getElementById("results");
var score = document.getElementById("userscore");
var saveResult = document.getElementById("saveuser");
var saveInitial = document.getElementById("userinitials");

var cQuestion = 0;
var scoreCheck = 0;
var timerObj;
var timerCount = 60;
startButton.addEventListener("click", startQuiz);
// answerText.addEventListener("click",)
results.classList.add("hide");
function startQuiz() {
  startButton.classList.add("hide");
  questionContainer.classList.remove("hide");
  createButtons();
  timerObj = setInterval(function () {
    time.innerText = "Time Left: " + timerCount;
    if (timerCount > 0) {
      timerCount--;
    } else {
      finalState();
    }
  }, 1000);
  console.log(questions[cQuestion].question);
  displayQuestion();
}

function displayQuestion() {
  questionText.innerText = questions[cQuestion].question;
  var answerbts = document.querySelectorAll(".btn");
  var i = 0;
  questions[cQuestion].answers.forEach((answer) => {
    answerbts[i].innerText = answer.text;
    answerbts[i].setAttribute("data-correct", answer.correct);
    i++;
    // resetState();
  });
}

function createButtons() {
  for (let i = 0; i < 4; i++) {
    var button = document.createElement("button");
    button.setAttribute("data-correct", "0");
    button.classList.add("btn");
    button.addEventListener("click", checkAnswer);
    console.log(button);
    answerText.appendChild(button);
  }
}

function checkAnswer(event) {
  console.log(
    event.target,
    event.target.getAttribute("data-correct"),
    "On click",
    "event"
  );
  var userAnswer = event.target.getAttribute("data-correct");
  if (userAnswer == "true") {
    scoreCheck += 13;
    result.innerText = "right";
  } else {
    result.innerText = "wrong";
    timerCount -= 5;
  }
  if (cQuestion < questions.length - 1) {
    cQuestion++;
    displayQuestion();
  } else {
    finalState();
  }
}

function finalState() {
  clearInterval(timerObj);
  questionContainer.classList.add("hide");

  results.classList.remove("hide");
  score.innerText = "Final Score: " + (scoreCheck + timerCount);
}

const questions = [
  {
    question: "What is 2 + 2?",
    answers: [
      { text: "4", correct: true },
      { text: "22", correct: false },
      { text: "8", correct: false },
      { text: "10", correct: false },
    ],
  },
  {
    question: "what is 3 + 2?",
    answers: [
      { text: "7", correct: false },
      { text: "77", correct: false },
      { text: "5", correct: true },
      { text: "9", correct: false },
    ],
  },
  {
    question: "What is 8 + 10?",
    answers: [
      { text: "33", correct: false },
      { text: "10", correct: false },
      { text: "15", correct: false },
      { text: "18", correct: true },
    ],
  },
];
