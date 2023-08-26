let count = 0;
let circle2 = document.querySelector(".circle2");
let circle = document.querySelector(".circle");
let num = document.querySelector(".num");
circle2.addEventListener("click", () => {
  setInterval(() => {
    if (count === 100) {
      num.innerHTML = "Completed";
      circle.classList.remove('rotate');
    } else {
      count = count + 1;
      num.innerHTML = `${count}%`;
    circle.classList.add('rotate');
    }
  }, 150);
});
