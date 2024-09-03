// Set the date we're counting down to
let countDownDate = new Date("Jan 1, 2050 15:37:25").getTime();
// Update the count down every 1 second
let timer = setInterval(function () {
  // Get today's date and time
  let now = new Date().getTime();
  // Find the distance between now and the count down date
  let distance = countDownDate - now;
  let finalSec = Math.floor(distance / 1000) % 60;
  let finalMins = Math.floor(distance / 1000 / 60) % 60;
  let finalHours = Math.floor(distance / 1000 / 60 / 60) % 24;
  let finalDays = Math.floor(distance / 1000 / 60 / 60 / 24);
  // Output the result in an element with id="demo"
  document.getElementById(  
    "timer"
  ).innerHTML = `${finalDays} days ${finalHours}  hours ${finalMins} minutes ${finalSec} seconds `;
  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
