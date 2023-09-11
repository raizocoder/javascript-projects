let numberValue = document.getElementById("numberValue");
let numberShow = document.getElementById("numbershow");
let addBtn = document.getElementById("addbtn");
let minusBtn = document.getElementById("minusbtn");

let counter = 0;
addBtn.addEventListener("click", () => {
  let inputValue = +numberValue.value;
  counter = counter + inputValue;
  numberShow.value = counter;
});
minusBtn.addEventListener("click", () => {
  if (numberShow.value == 0) {
    counter = 0;
    numberShow.value = 0;
  } else {
    let inputValue = +numberValue.value;
    counter = counter - inputValue;
    numberShow.value = counter;
  }
});
