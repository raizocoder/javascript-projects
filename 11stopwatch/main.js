let displayTimer = document.getElementById("display-timer");
let timer_isStop = true; //this mean timer is stop thats why is true ---- true value mens any number and false value means 0
let sec = 0;
let min = 0;
let hr = 0;

function start() {
  if (timer_isStop == true) {
    // this means time is stop so true
    timer_isStop = false; // this mean timer starts
    timer();
  }
}
function timer() {
  if (timer_isStop == false) {
    sec++;
    if (sec == 60) {
      min++;
      sec = 0;
    }

    if (min == 60) {
      hr++;
      min = 0;
    }

    let secString = sec < 10 ? `0${sec}` : sec;
    let minString = min < 10 ? `0${min}` : min;
    let hrString = hr < 10 ? `0${hr}` : hr;

    displayTimer.innerHTML = `${hrString}:${minString}:${secString}`;
    setTimeout("timer()", 1000);
  }
}
function stop() {
  timer_isStop = true;
}
function reset() {
  timer_isStop = true;
  sec = 0;
  min = 0;
  hr = 0;
  displayTimer.innerHTML = `00:00:00`;
}
