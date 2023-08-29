let searchBar = document.getElementById("searchBar");
let nameList = document.getElementById("nameList").getElementsByTagName("li");
searchBar.addEventListener("input", (e) => {
  //   console.log(e.target);
  let inputValue = e.target.value.toLowerCase().trim();
  // console.log(inputValue);
  for (i = 0; i < nameList.length; i++) {
    let namesList = nameList[i].textContent.toLowerCase();
    if (namesList.includes(inputValue)) {
      nameList[i].style.display = "block";
    }
     else {
      nameList[i].style.display = "none";
    }
  }
});
