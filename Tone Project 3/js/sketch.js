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

let coyote;

function preload() {
  coyote = loadImage('media/coyote.jpg');
}

let boom = new Tone.Noise('white').start();

function setup() {
  createCanvas(800, 800);
  image(coyote);
}

function draw() {
  background(220);
}

function mousePressed() {
  ampEnv.triggerAttackRelease(1.5)
  osc.frequency.linearRampTo(300,'+1.5');
  boom.triggerAttackRelease(0.5,'+1.51');
}