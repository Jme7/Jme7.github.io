var frameRate = 60;
var truerate = 1000/frameRate;
function frameRateSet(rate) {
  frameRate = rate;
}
function draw() {}
function adjustrate() {
  truerate = 1000/frameRate;
}
function loop() {
  adjustrate();
  draw();
}
setInterval(loop, truerate);
