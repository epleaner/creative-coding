let a;
let fontSize;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  a = createA('/hello', 'check me out');
  a.position(width / 2, height / 2);
  a.style('font-size', (mouseX+mouseY)/2+'px');
  a.style('color', 'papayawhip');
  a.style('text-decoration', 'none')
}

function draw() {
  background(Math.random() * 255, Math.random() * 255, Math.random() * 255,);
  a.style('font-size', (mouseX+mouseY)/2+'px');
  a.html("you've been on this page for " + millis() / 1000 + " seconds")
}

function windowResized() {
    resizeCanvas(window.windowWidth, window.windowHeight);
}