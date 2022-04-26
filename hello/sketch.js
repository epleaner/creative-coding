let a;
let fontSize;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  a = createA('/hello', 'check me out');
  a.position(mouseX, mouseY);
  a.style('font-size', (mouseX+mouseY)/2+'px');
  a.style('color', 'papayawhip');
  a.style('text-decoration', 'none')
}

function draw() {
  background(Math.random() * 255, Math.random() * 255, Math.random() * 255,);
  a.style('font-size', max((mouseX+mouseY)/8, 10) +'px');
  a.html("you've been on this page for " + millis() / 1000 + " seconds")
  a.position(mouseX, mouseY);
}

function windowResized() {
    resizeCanvas(window.windowWidth, window.windowHeight);
}
