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

let synth = new Tone.DuoSynth().toDestination();

let backgroundMusic = new Tone.Pattern(function(time, note){
  synth.triggerAttackRelease(note, 0.25, time);
}, ["E4", "D4", "F4", "E4", "A5", "G4", "F4", "E4"]);

let brushColor;
brushColor = (0, 0, 0);

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
  createCanvas(1600, 800);

  console.log('IGNITION IS GO')

  button1 = createButton('reset');
  button1.position(50,700);
  button1.mousePressed(reset);
}

function draw() {
  background(255, 255, 255);
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
  console.log('ZORD ONLINE')
  if ((mouseX > 50 && mouseX < 101) && (mouseY > 50 && mouseY <101)) {
    brushColor = (250, 0, 0);
    synth.triggerAttackRelease("A2", 0.1);
    console.log("RED IS GO")
  }
  else if ((mouseX > 50 && mouseX < 101) && (mouseY > 100 && mouseY <151)) {
    brushColor = (250, 250, 0);
    synth.triggerAttackRelease("B2", 0.1);
    console.log("ORANGE IS GO")
  }
  else if ((mouseX > 50 && mouseX < 101) && (mouseY > 150 && mouseY <201)) {
    brushColor = (100, 250, 0);
    synth.triggerAttackRelease("C2", 0.1);
    console.log("YELLOW IS GO")
  }
  else if ((mouseX > 50 && mouseX < 101) && (mouseY > 200 && mouseY <251)) {
    brushColor = (0, 250, 0);
    synth.triggerAttackRelease("D2", 0.1);
    console.log("GREEN IS GO")
  }
  else if ((mouseX > 50 && mouseX < 101) && (mouseY > 250 && mouseY <301)) {
    brushColor = (0, 250, 250);
    synth.triggerAttackRelease("E2", 0.1);
    console.log("CYAN IS GO")
  }
  else if ((mouseX > 50 && mouseX < 101) && (mouseY > 300 && mouseY <351)) {
    brushColor = (0, 100, 250);
    synth.triggerAttackRelease("F2", 0.1);
    console.log("AQUA IS GO")
  }
  else if ((mouseX > 50 && mouseX < 101) && (mouseY > 350 && mouseY <401)) {
    brushColor = (0, 0, 250);
    synth.triggerAttackRelease("G2", 0.1);
    console.log("BLUE IS GO")
  }
  else if ((mouseX > 50 && mouseX < 101) && (mouseY > 400 && mouseY <451)) {
    brushColor = (250, 0, 250);
    synth.triggerAttackRelease("A3", 0.1);
    console.log("PURPLE IS GO")
  }
  else if ((mouseX > 50 && mouseX < 101) && (mouseY > 450 && mouseY <501)) {
    brushColor = (100, 50, 0);
    synth.triggerAttackRelease("B3", 0.1);
    console.log("BROWN IS GO")
  }
  else if ((mouseX > 50 && mouseX < 101) && (mouseY > 500 && mouseY <551)) {
    brushColor = (250, 250, 250);
    synth.triggerAttackRelease("C3", 0.1);
    console.log("WHITE IS GO")
  }
  else if ((mouseX > 50 && mouseX < 101) && (mouseY > 550 && mouseY <601)) {
    brushColor = (0, 0, 0);
    synth.triggerAttackRelease("D3", 0.1);
    console.log("BLACK IS GO")
  }
  else {
    noStroke();
    fill(brushColor);
    circle(mouseX, mouseY, 20, 20);
    console.log("PAINT IS GO")    
    Tone.start();
    backgroundMusic.start(0);
    Tone.Transport.start();
  }
}

function mouseDragged() {
  noStroke();
  fill(brushColor)
  circle(mouseX, mouseY, 20, 20);
  console.log("DRAG IS GO")
}

function reset() {
  boomEnv.triggerAttackRelease(0.5)
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