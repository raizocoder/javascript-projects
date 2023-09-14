const userInput = document.querySelector(".userInput");
const lowercase = document.querySelector("#lowercase");
const uppercase = document.querySelector("#uppercase");
const capitalizecase = document.querySelector("#capitalizecase");
const snakecase = document.querySelector("#snakecase");
const kebabcase = document.querySelector("#kebabcase");
const joincase = document.querySelector("#joincase");
const pascalcase = document.querySelector("#pascalcase");

userInput.addEventListener("input", (e) => {
  let inputText = e.target.value.toLowerCase().trim();
  let arrayInput = inputText.split(" ");
  let finalString = arrayInput.filter((word) => word != "").join(" ");
  lowercase.innerHTML = inputText;
  uppercase.innerHTML = e.target.value.toUpperCase().trim();
  capitalizecase.innerHTML = finalString;
  capitalizecase.classList.add("capitalizecase")
  snakecase.innerHTML = finalString.replaceAll(' ','_');
  kebabcase.innerHTML = finalString.replaceAll(' ','-');
  joincase.innerHTML = finalString.replaceAll(" ",'');
  pascalcase.innerHTML = finalString;
  pascalcase.classList.add("pascalcase");
});
