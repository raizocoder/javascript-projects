let colorCodes = document.getElementById("colorCodes");

function getColor() {
  let colorRed = Math.floor(Math.random() * 255);
  let colorGreen = Math.floor(Math.random() * 255);
  let colorBlue = Math.floor(Math.random() * 255);
  let final = `rgb(${colorRed},${colorGreen},${colorBlue})`;
  colorCodes.value = final;
  document.body.style.backgroundColor = final;
}
