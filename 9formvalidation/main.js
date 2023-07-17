let user = document.getElementById("user");
let pass = document.getElementById("pass");
let tel = document.getElementById("tel");
let email = document.getElementById("email");

let flag = 0;
function validForm() {
  // preventdefault();
  userValid();
  passValid();
  telValid();
  emailValid();
  // if(email.value.length == "" || pass.value.length == ""|| tel.value.length == ""|| user.value.length == ""){
  //   flag = 0;
  // }
  email.value.length == "" ||
  pass.value.length == "" ||
  tel.value.length == "" ||
  user.value.length == ""
    ? (flag = 0)
    : (flag = 1);

  if (flag) {
    return true;
  } else {
    return false;
  }
}

function userValid() {
  if (user.value.length < 5) {
    user.style.borderColor = "red";
    document.getElementById("usererror").innerHTML =
      "*username is required minimum 5 characters";
    usererror.style.color = "red";
    flag = 0;
  } else {
    user.style.borderColor = "green";
    document.getElementById("usererror").innerHTML = "Required";
    usererror.style.color = "green";
    flag = 1;
  }
}

function passValid() {
  if (pass.value.length < 5) {
    pass.style.borderColor = "red";
    document.getElementById("passerror").innerHTML =
      "*password is required minimum 5 characters";
    passerror.style.color = "red";
    flag = 0;
  } else {
    pass.style.borderColor = "green";
    document.getElementById("passerror").innerHTML = "Required";
    passerror.style.color = "green";
    flag = 1;
  }
}

function telValid() {
  
  if (tel.value.length == 10) {
    document.getElementById("telerror").innerHTML = "Correct";
    tel.style.borderColor = "green";
    telerror.style.color = "green";
    flag = 1;
  } else {
    document.getElementById("telerror").innerHTML =
      "*fill 10 digit number only";
    tel.style.borderColor = "red";
    telerror.style.color = "red";
    flag = 0;
  }
}

function emailValid() {
  if (email.value.length < 5) {
    document.getElementById("emailerror").innerHTML = "*email is required";
    email.style.borderColor = "red";
    emailerror.style.color = "red";
    flag = 0;
  } else {
    document.getElementById("emailerror").innerHTML = "Correct";
    email.style.borderColor = "green";
    emailerror.style.color = "green";
    flag = 1;
  }
}


