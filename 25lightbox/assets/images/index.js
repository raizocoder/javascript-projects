 const img = document.querySelectorAll(".img");
const showcaseBox = document.querySelector(".showcaseBox");  
;
for (let item of img) {
  item.addEventListener("click", () => {
    let imageitem = item.innerHTML;
    showcaseBox.classList.add("showgallery");
    showcaseBox.innerHTML = imageitem;
    let closebtn = document.createElement("button");
    closebtn.innerText = "Close";
    closebtn.classList.add("close");
    showcaseBox.appendChild(closebtn);
    closebtn.addEventListener("click", () => {
      showcaseBox.classList.remove("showgallery");
    });
  });
}
