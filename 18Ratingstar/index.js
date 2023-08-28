let star_Icon = document.querySelectorAll(".fa-star");
let emoji_Icon = document.querySelectorAll(".far");
// console.log(star_Icon); all start elements in one variable -----star_Icon
star_Icon.forEach((star) => {
  star.addEventListener("click", (e) => {
    // console.log(e.target.getAttribute("num"));
    let rating_num = e.target.getAttribute("num");
    updateRating(rating_num);
  });
});
function updateRating(rating_num) {
  console.log(rating_num);
  for (i = 0; i < star_Icon.length; i++) {
    if (i <= rating_num - 1) {
      star_Icon[i].classList.add("active");
    } else {
      star_Icon[i].classList.remove("active");
    }
  }
  for (i = 0; i < emoji_Icon.length; i++) {
    emoji_Icon[i].style.transform =
      "translate(-" + (rating_num - 1) * 50 + "px)";
  }
}
