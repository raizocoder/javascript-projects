let passRange = document.getElementById("passRange");
let passValue = document.getElementById("passValue");
let passField = document.getElementById("passField");
let genBtn = document.getElementById("genBtn");

passRange.addEventListener("change", function () {
  passValue.textContent = passRange.value;
  // passRange.value = passValue.textContent;---error comes in this line notice that left side who takes the value from someone
  //right side who gives value to left side
});

let chars =
  "abcdefghijklmnopqrstuvwxyz!@#$%^&*()<>;:?ABCDEFGHIJKLMNOPQRSTUVWXYZ|-0123456789";
genBtn.addEventListener("click", function () {
  passField.value = generatePassword(passRange.value);
});

function generatePassword(passLength) {
  // Generate a random password of the specified length.

  let password = "";
  for (let i = 0; i < passLength; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }
  // Return the generated password.
  return password;
}

function copyPassword() {
  if ( passField.value != "" ||  passField.value >= 1) {
    navigator.clipboard.writeText( passField.value);
    alert("password copy !!!!!");
  }
}

