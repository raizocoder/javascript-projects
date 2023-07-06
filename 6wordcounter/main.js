let field = document.getElementById("field");

field.addEventListener("input", function () {
  let text = field.value;
  document.getElementById("letter").innerHTML = text.length;
  let text2 = text.trim();
  let Word = text2.split(" ");
  let finalWord = Word.filter((word) => word != "");
  document.getElementById("word").innerHTML = finalWord.length;
});
