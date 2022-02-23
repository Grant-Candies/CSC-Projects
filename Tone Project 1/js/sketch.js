const sounds = new Tone.Players({
  yuh : "Tone Project 1\media\YUH.mp3",
  life : "Tone Project 1\media\life.mp3",
  coin : "Tone Project 1\media\coin.mp3",
  pause : "Tone Project 1\media\pause.mp3"
})

let button1;
let button2;
let button3;
let button4;
const delay = new Tone.FeedbackDelay("8n", 0.5);
let slider;

function setup() {
  createCanvas(400, 400);

  sounds.connect(delay);
  delay.toDestination();

  button1 = createButton('yuh');
  button1.position(20,200);
  button1.mousePressed(  () => playSound('yuh')  );

  button2 = createButton('life');
  button2.position(120,200);
  button2.mousePressed(  () => playSound('life')  );

  button3 = createButton('coin');
  button3.position(220,200);
  button3.mousePressed(  () => playSound('coin')  );

  button4 = createButton('pause');
  button4.position(320,200);
  button4.mousePressed(  () => playSound('pause')  );

  slider = createSlider(0., 1., 0.5, 0.1);
  slider.mouseReleased(  ()=>{
    delay.delayTime.value = slider.value();
  })
}

function draw() {
  background(220);
  text('Press buttons for dopamine', 20, 50);
  text('Move slider for bonus dopamine', 20, 100);
}

function playSound(whichSound) {
  if (whichSound === 'yuh'){
    sounds.player('yuh').start();
  }
  else if (whichSound === 'life'){
    sounds.player('life').start();
  }
  else if (whichSound === 'coin'){
    sounds.player('coin').start();
  }
  else if (whichSound === 'pause') {
    sounds.player('pause').start();
  }
}