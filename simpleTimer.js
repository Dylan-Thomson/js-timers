var audio = new Audio("raven.mp3");
setTimeout(fiveSeconds, 1000 * 5);
setTimeout(tenSeconds, 1000 * 10);
setTimeout(timeUp, 1000 * 15);

function fiveSeconds() {
  $("#time-left").append("<h2>About 10 seconds left!</h2>");
  console.log("10 seconds left");
}

function tenSeconds() {
  $("#time-left").append("<h2>About 5 seconds left!</h2>");
  console.log("5 seconds left");
}

function timeUp() {
  $("#time-left").append("<h2>Time's up!</h2>");
  console.log("Done");
  audio.play();
}
