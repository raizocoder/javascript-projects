const saveBtn = document.getElementById("saveBtn");
const updateBtn = document.getElementById("updateBtn");
const names = document.getElementById("name");
const email = document.getElementById("email");
const notify = document.getElementById("notify");
const datas = document.getElementById("details");

saveBtn.addEventListener("click", () => {
  const getData = JSON.parse(localStorage.getItem("students")) ?? [];
  const getName = names.value.trim();
  const getEmail = email.value.trim();
  if (getEmail && getName) {
    getData.push({
      name: getName,
      email: getEmail,
    });
    localStorage.setItem("students", JSON.stringify(getData));
    names.value = "";
    email.value = "";
    notify.innerHTML = "Data added successfully";
    getDataLocal();
  }
});

function getDataLocal() {
  const getData = JSON.parse(localStorage.getItem("students"));
  datas.innerHTML = "";
  if (getData) {
    getData.forEach((std, index) => {
      datas.innerHTML += `<div class="stdData"><p><b>NAME</b>:${std.name}</p>
      <p><b>EMAIL</b>:${std.email}</p><Button class="editBtn" onclick="editBtn(${index})">Edit</Button><Button class="delBtn" onclick="delBtn(${index})">Delete</Button></div>`;
    });
  }
}
getDataLocal();

function delBtn(index) {
  const getData = JSON.parse(localStorage.getItem("students"));
  getData.splice(index, 1);
  localStorage.setItem("students", JSON.stringify(getData));
  getDataLocal();
  notify.innerHTML = "Data deleted successfully";
}
function editBtn(index) {
  saveBtn.setAttribute("disabled", true);
  updateBtn.removeAttribute("disabled", true);
  const getData = JSON.parse(localStorage.getItem("students"));
  names.value = getData[index].name;
  email.value = getData[index].email;
  updateBtn.addEventListener("click", () => {
    getData[index].name = names.value;
    getData[index].email = email.value;
    localStorage.setItem("students", JSON.stringify(getData));
    getDataLocal();
    saveBtn.removeAttribute("disabled", false);
    notify.innerHTML = "Data updated successfully";
    names.value = "";
    email.value = "";
  });
}
