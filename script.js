const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  questionContainerElement.classList.remove("hide");
  currentQuestionIndex = 0;
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  // setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    question: "Eergisteren",
    answers: [
      { text: "The day before yesterday", correct: true },
      { text: "Yesterday", correct: false },
      { text: "Yesterday Evening", correct: false },
      { text: "Day after tomorrow", correct: false }
    ]
  },
  {
    question: "Overmorgen",
    answers: [
      { text: "Day after tomorrow", correct: true },
      { text: "Yesterday", correct: false },
      { text: "The day before yesterday", correct: false },
      { text: "Yesterday Evening", correct: false }
    ]
  },
  {
    question: "03:10 's ochtends & 15:10 's avonds",
    answers: [
      { text: "Tien over half vier", correct: false },
      { text: "Tien over vier", correct: false },
      { text: "Tien over drie", correct: true },
      { text: "Tien voor drie", correct: false }
    ]
  },
  {
    question: "04:15 's ochtends & 16:15 's avonds",
    answers: [
      { text: "Kwart over vijf", correct: false },
      { text: "Kwart over vier", correct: true },
      { text: "Kwart voor vier", correct: false },
      { text: "Kwart voor drie", correct: false }
    ]
  },
  {
    question: "05:20 's ochtends & 17:20 's avonds",
    answers: [
      { text: "Tien over half vijf", correct: false },
      { text: "Tien voor half vijf", correct: false },
      { text: "Tien voor half zes", correct: true },
      { text: "Tien over half zes", correct: false }
    ]
  },
  {
    question: "06:25 's ochtends & 18:25 's avonds",
    answers: [
      { text: "Vijf over half zeven", correct: false },
      { text: "Vijf voor half zes", correct: false },
      { text: "Vijf over half zes", correct: false },
      { text: "Vijf voor half zeven", correct: true }
    ]
  },
  {
    question: "07:30 's ochtends & 19:30 's avonds",
    answers: [
      { text: "Half acht", correct: true },
      { text: "Half zeven", correct: false }
    ]
  },
  {
    question: "08:35 's ochtends & 20:35 's avonds",
    answers: [
      { text: "Vijf voor half acht", correct: false },
      { text: "Vijf over half acht", correct: false },
      { text: "Vijf voor half negen", correct: false },
      { text: "Vijf over half negen", correct: true }
    ]
  },
  {
    question: "09:40 's ochtends & 21:40 's avonds",
    answers: [
      { text: "Tien voor half tien", correct: false },
      { text: "Tien over half negen", correct: false },
      { text: "Tien over half tien", correct: true },
      { text: "Vijf voor half negen", correct: false }
    ]
  },
  {
    question: "10:45 's ochtends & 22:45 's avonds",
    answers: [
      { text: "Kwart over tien", correct: false },
      { text: "Kwart voor tien", correct: false },
      { text: "Kwart over elf", correct: false },
      { text: "Kwart voor elf", correct: true }
    ]
  },
  {
    question: "11:50 's ochtends & 23:50 's avonds",
    answers: [
      { text: "Tien over twaalf", correct: false },
      { text: "Tien voor twaalf", correct: true },
      { text: "Tien voor elf", correct: false },
      { text: "Tien over elf", correct: false }
    ]
  },
  {
    question: "12:55 's avonds & 00:55 's ochtends",
    answers: [
      { text: "Vijf over een", correct: false },
      { text: "Vijf voor twaalf", correct: false },
      { text: "Vijf voor een", correct: true },
      { text: "Vijf over twaalf", correct: false }
    ]
  }
];
