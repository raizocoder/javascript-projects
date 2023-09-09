const button = document.querySelectorAll("button");
const gallery = document.querySelectorAll(".gallery .all")
for (let btn of button) {
  btn.addEventListener("click", (e) => {
    gallery.innerHTML = "";
    let filterValue = e.target.getAttribute("data-filter");
    filterData(filterValue);
  });
}
function filterData(value) {
  gallery.forEach((item) => {
    if (value === "all" || item.classList.contains(value)) {
      item.style.display = "block";
    }else{
        item.style.display = "none";
    }
  });
}
