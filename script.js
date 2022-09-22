var startButton = document.getElementById("start-btn");
var questionContainer = document.getElementById("container");
var questionText = document.getElementById("question");

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  startButton.classList.add("hide");
  questionContainer.classList.remove("hide");
  questionText.innerText = questions.question;
}

function showQuestions() {}

const questions = [
  {
    question: "What is 2 + 2?",
    answers: [
      { text: "4", correct: true },
      { text: "22", correct: false },
    ],
  },
];
