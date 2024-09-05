const quizData = [
  {
    question: "What is the capital of France?",
    a: "New York",
    b: "London",
    c: "Paris",
    d: "Dublin",
    correct: "c",
  },
  {
    question: "Who is the CEO of Tesla?",
    a: "Jeff Bezos",
    b: "Elon Musk",
    c: "Bill Gates",
    d: "Tony Stark",
    correct: "b",
  },
  {
    question: "What is the most used programming language in 2024?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "Which of the following is not a JavaScript framework?",
    a: "React",
    b: "Angular",
    c: "Vue",
    d: "Laravel",
    correct: "d",
  },
];

let currentQuiz = 0;
let score = 0;

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const scoreDisplay = document.getElementById("scoreDisplay");
const answers = document.querySelectorAll(".answer");

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answers.forEach((answer) => (answer.checked = false));
}

function getSelected() {
  let answer;
  answers.forEach((ans) => {
    if (ans.checked) {
      answer = ans.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      scoreDisplay.innerHTML = `You scored ${score} out of ${quizData.length}!`;
      submitBtn.style.display = "none";
    }
  } else {
    alert("Please select an answer!");
  }
});
