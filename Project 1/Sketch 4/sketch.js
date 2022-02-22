function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  background(0, 0, 255);
  stroke(255);
  strokeWeight(8);
  fill(0, 255, 0);
  circle(200, 200, 250);
  fill(255, 0, 0);
  beginShape();
  vertex(200, 90);
  vertex(225, 160);
  vertex(300, 160);
  vertex(240, 200);
  vertex(265, 280);
  vertex(200, 230);
  vertex(135, 280);
  vertex(160, 200);
  vertex(100, 160);
  vertex(175, 160);
  endShape(CLOSE)
}