const chorus = new Tone.Chorus(4, 2.5, 0.5).toDestination().start();
const synth = new Tone.DuoSynth().connect(chorus);

let slider;

let notes = {
  'q': 'C4',
  'w': 'D4',
  'e': 'E4',
  'r': 'F4',
  't': 'G4',
  'y': 'A4',
  'u': 'B4',
  'i': 'C5'
}

function setup() {
  createCanvas(400, 400);

  synth.triggerAttackRelease("C4", "8n");

  slider = createSlider(0., 1., 0.5, 0.1);
  slider.mouseReleased(  ()=>{
    chorus.feedback.value = slider.value();
  })
}

function draw() {
  background(220);
}

function keyPressed() {
  let toPlay = notes[key];
  synth.triggerAttackRelease(toPlay, '4n');
}