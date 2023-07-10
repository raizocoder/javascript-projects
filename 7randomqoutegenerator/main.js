let quoteText = document.getElementById("qouteText");
let author = document.getElementById("author");
let newQoute = document.getElementById("newqoute");

const apiUrl = "https://api.quotable.io/random";

async function getQoute(Url){
 
 const response = await fetch(Url);
 let data = await response.json();
 quoteText.innerHTML = data.content;
 author.innerHTML = data.author;

}
getQoute(apiUrl); // this call for when page load first time so that first qoute show...