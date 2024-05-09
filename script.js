function toggleAnswer(number) {
  var answer = document.getElementById("answer" + number);
  if (answer.classList.contains("show")) {
    answer.classList.remove("show");
  } else {
    answer.classList.add("show");
  }
}
confetti({
  particleCount: 100,
  spread: 70,
  origin: { y: 0.6 },
});
