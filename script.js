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
  questions.answers.forEach((answer) => {
    var button = document.createElement("button");
    button.innerText = questions[0].answers[3].text;
    button.classList.add("btn");
    console.log(startQuiz);
  });
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
