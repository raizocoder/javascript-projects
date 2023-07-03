let btn = document.querySelectorAll(".btn");
let i;
for (i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    let  panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


