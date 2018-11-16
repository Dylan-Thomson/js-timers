var audio = new Audio("raven.mp3");
setTimeout(fiveSeconds, 5000);
setTimeout(tenSeconds, 10000);
setTimeout(timeUp, 15000);

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
