const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: 2
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correct: 1
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Shakespeare", "Dickens", "Hemingway", "Fitzgerald"],
    correct: 0
  }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const question = questions[currentQuestionIndex];
  const quizElement = document.getElementById("quiz");
  quizElement.innerHTML = `
    <p><strong>${question.question}</strong></p>
    ${question.options.map((option, index) => `
      <div>
        <input type="radio" name="option" id="option${index}" value="${index}">
        <label for="option${index}">${option}</label>
      </div>
    `).join('')}
  `;
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption) {
    const answerIndex = parseInt(selectedOption.value);
    if (answerIndex === questions[currentQuestionIndex].correct) {
      score++;
    }
  }
}

function showScore() {
  const scoreElement = document.getElementById("score");
  scoreElement.innerHTML = `Your score: ${score} / ${questions.length}`;
}

document.getElementById("nextBtn").addEventListener("click", () => {
  checkAnswer();
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showScore();
    document.getElementById("nextBtn").style.display = "none"; // Hide button after quiz ends
  }
});

loadQuestion();
