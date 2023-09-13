const inputField = document.querySelector(".inputfield");
const Form = document.querySelector("form");
let guesses = document.querySelector(".guesses");
let range = document.querySelector(".range");
let startBtn = document.querySelector(".startbtn");
let submitBtn = document.querySelector(".submitbtn");
let Attempt = document.querySelector(".attempt");

(function () {
  let randomNumber = Math.round(Math.random() * 100);
  Form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userValue = parseInt(inputField.value);
    guesses.innerHTML += `<h3>Your Guess is ${userValue}</h3>`;
    let attempts = guesses.children.length;
    Attempt.innerHTML = `:${attempts}`;
    if (userValue < randomNumber) {
      range.textContent = "Too low";
    } else if (userValue > randomNumber) {
      range.textContent = "Too High";
    } else {
      range.textContent = `You Win! congrats Number is ${randomNumber}, Restart your Game`;
      startBtn.disabled = false;
      startBtn.classList.add("start");
      submitBtn.disabled = true;
      inputField.disabled = true;
      Form.reset();
    }
  });

  startBtn.addEventListener("click", () => {
    randomNumber = Math.round(Math.random() * 100);
    guesses.innerHTML = "";
    Attempt.innerHTML = ":0";
    startBtn.disabled = true;
    startBtn.classList.remove("start");
    submitBtn.disabled = false;
    inputField.disabled = false;
    range.innerHTML = "";
  });
})();
