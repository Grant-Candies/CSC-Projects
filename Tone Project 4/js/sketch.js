let osc = new Tone.AMOscillator(800,'sine','sine').start()
let gain = new Tone.Gain().toDestination();
let pan = new Tone.Panner().connect(gain);
let ampEnv = new Tone.AmplitudeEnvelope({
  attack: 0.1,
  decay: 0.2,
  sustain: 1.0,
  release: 0.8
}).connect(pan);
osc.connect(ampEnv);

let brushColor;

let button1

let boom = new Tone.Noise('white').start();
let boomEnv = new Tone.AmplitudeEnvelope({
  attack: 0.1,
  decay: 0.2,
  sustain: 1.0,
  release: 0.8
}).connect(gain);
let boomFilter = new Tone.Filter(800,'lowpass').connect(boomEnv)
boom.connect(boomFilter);

function setup() {
  createCanvas(1200, 1200);

  button1 = createButton('reset');
  button1.position(50,700);
  button1.mousePressed(draw);
}

function draw() {
  background(220);
  noStroke()
  fill(250, 0, 0);
  square(50, 50, 50);
  fill(250, 250, 0);
  square(50, 100, 50);
  fill(100, 250, 0);
  square(50, 150, 50);
  fill(0, 250, 0);
  square(50, 200, 50);
  fill(0, 250, 250);
  square(50, 250, 50);
  fill(0, 100, 250);
  square(50, 300, 50);
  fill(0, 0, 250);
  square(50, 350, 50);
  fill(250, 0, 250);
  square(50, 400, 50);
  fill(100, 50, 0);
  square(50, 450, 50);
  fill(250, 250, 250);
  square(50, 500, 50);
  fill(0, 0, 0);
  square(50, 550, 50);
}

function mousePressed() {
  if ((mouseX > 50 && mouseX < 101)&&(mouseY > 50 && mouseY <101)) {
    brushColor = (250, 0, 0);
  }
  else if ((mouseX > 50 && mouseX < 101)&&(mouseY > 100 && mouseY <151)) {
    brushColor = (250, 250, 0);
  }
  else if ((mouseX > 50 && mouseX < 101)&&(mouseY > 150 && mouseY <201)) {
    brushColor = (100, 250, 0);
  }
  else if ((mouseX > 50 && mouseX < 101)&&(mouseY > 200 && mouseY <251)) {
    brushColor = (0, 250, 0);
  }
  else if ((mouseX > 50 && mouseX < 101)&&(mouseY > 250 && mouseY <301)) {
    brushColor = (0, 250, 250);
  }
  else if ((mouseX > 50 && mouseX < 101)&&(mouseY > 300 && mouseY <351)) {
    brushColor = (0, 100, 250);
  }
  else if ((mouseX > 50 && mouseX < 101)&&(mouseY > 350 && mouseY <401)) {
    brushColor = (0, 0, 250);
  }
  else if ((mouseX > 50 && mouseX < 101)&&(mouseY > 400 && mouseY <451)) {
    brushColor = (250, 0, 250);
  }
  else if ((mouseX > 50 && mouseX < 101)&&(mouseY > 450 && mouseY <501)) {
    brushColor = (100, 50, 0);
  }
  else if ((mouseX > 50 && mouseX < 101)&&(mouseY > 500 && mouseY <551)) {
    brushColor = (250, 250, 250);
  }
  else if ((mouseX > 50 && mouseX < 101)&&(mouseY > 550 && mouseY <601)) {
    brushColor = (0, 0, 0);
  }
  else {
    ellipse(mouseX, mouseY, 20, 20);    
  }
  noStroke();
  ellipse(mouseX, mouseY, 20, 20);
}

function mouseDragged() {
  noStroke();
  ellipse(mouseX, mouseY, 20, 20);
}