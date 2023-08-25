let input = document.getElementById("input");
let button = document.getElementById("btn");
let qrimage = document.getElementById("qrimage");

let image = document.getElementById("image");
let text = document.getElementById("text");

button.addEventListener("click", () => {
  // console.log("first");

  
  // console.log(inputValue);
  if ((!input.value)) {
    alert("type something in input field");
  } else {
    let inputValue = input.value.trim();
    button.innerHTML = "Generating...";
    let imgSrc = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${inputValue}`;
    image.src = imgSrc;
    qrimage.style.border+="2px solid";
    button.innerHTML = "Generated Qr Code";
    input.value = "";
    text.innerHTML = inputValue;
    let refreshButton = document.createElement("button");
    refreshButton.innerHTML = "Refresh";
    qrimage.appendChild(refreshButton);
    refreshButton.addEventListener("click", () => {
      window.location.reload();
    });
  }
});
