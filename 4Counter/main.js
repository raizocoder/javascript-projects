let box = document.getElementById("box");
let counterValue = 0;

function plusValue() {
  counterValue++;
  box.value = counterValue;
}
function minusValue() {
  counterValue--;
  if (counterValue < 0) {
    counterValue = 0;
  } else {
    box.value = counterValue;
  }
}
function resetValue() {
  counterValue = 0;
  box.value = 0;
}
