var startButton = document.getElementById("start-btn");
var questionContainer = document.getElementById("container");
var questionText = document.getElementById("question");
var answerText = document.getElementById("answer-buttons");
var nextButton = document.getElementById("next-btn");

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  startButton.classList.add("hide");
  questionContainer.classList.remove("hide");
  questionText.innerText = questions[0].question;
  var button = document.createElement("button");
  answerText.appendChild(button);
  button.innerText = questions[0].answers[0].text;
  var button = document.createElement("button");
  answerText.appendChild(button);
  button.innerText = questions[0].answers[1].text;
  var button = document.createElement("button");
  answerText.appendChild(button);
  button.innerText = questions[0].answers[2].text;
  var button = document.createElement("button");
  answerText.appendChild(button);
  button.innerText = questions[0].answers[3].text;
  var button = document.createElement("button");
  answerText.addEventListener("click", resetState);
}

function resetState() {
  nextButton.classList.remove("hide");
}

const questions = [
  {
    question: "What is 2 + 2",
    answers: [
      { text: "4", correct: true },
      { text: "22", correct: false },
      { text: "8", correct: false },
      { text: "10", correct: false },
    ],
  },
];
