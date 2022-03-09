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
  coyote = loadImage('coyote.jpg');
}

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
  createCanvas(800, 800);
  imageMode(CENTER);
}

function draw() {
  background(220);
}

function mousePressed() {
  image(coyote, 400, 400)
  ampEnv.triggerAttackRelease(1.5)
  osc.frequency.linearRampTo(300,'+1.5');
  boomEnv.triggerAttackRelease(0.5,'+1.51');
}