const generate = document.querySelector(".generate");
const memeImage = document.querySelector(".meme-image");
const memeAuthor = document.querySelector(".meme-author");
const memeTitle = document.querySelector(".meme-title");

function generateMeme() {
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      const { author, title, url } = data;
      memeTitle.innerText = title;
      memeAuthor.innerText = `Memes by ${author}`;
      memeImage.src = url;
    });
}
generateMeme();
generate.addEventListener("click", () => {
  generateMeme();
});
