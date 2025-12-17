let score = 0;
let currentAnswer = 0;

function generateQuestion() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;

  currentAnswer = num1 + num2;
  document.getElementById("question").textContent =
    `What is ${num1} + ${num2}?`;

  document.getElementById("answer").value = "";
  document.getElementById("result").textContent = "";
}

function checkAnswer() {
  const userAnswer = Number(
    document.getElementById("answer").value
  );

  if (userAnswer === currentAnswer) {
    score++;
    document.getElementById("result").textContent = "✅ Correct!";
  } else {
    document.getElementById("result").textContent =
      "❌ Wrong! Try next one.";
  }

  document.getElementById("score").textContent = `Score: ${score}`;

  setTimeout(generateQuestion, 1000);
}

generateQuestion();

