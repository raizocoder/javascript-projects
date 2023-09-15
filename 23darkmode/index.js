const darkModeInput = document.getElementById("dark-mode");
const changeModeText = document.querySelector(".changeMode");

const isDarkModeOn = JSON.parse(localStorage.getItem("darkMode"));
darkModeInput.addEventListener("change", (e) => {
  darkModeOn();
});

if (isDarkModeOn) {
  darkModeInput.checked = true;
}
function darkModeOn() {
  if (darkModeInput.checked) {
    document.body.classList.add("dark");
    changeModeText.innerHTML = "Dark Mode On &#127769;";
    localStorage.setItem("darkMode", true);
  } else {
    document.body.classList.remove("dark");
    changeModeText.innerHTML = "Light Mode On &#9788;";
    localStorage.setItem("darkMode", false);
  }
}
darkModeOn();
