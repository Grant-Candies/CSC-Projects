// https://www.youtube.com/shorts/eml9uYV4W9M

let serialPDM;
let portName = "COM3";

let sensors;

const chorus = new Tone.Chorus(4, 2.5, 0.5).toDestination().start();
const synth = new Tone.DuoSynth().connect(chorus);

let r;
let g;
let b;

let keyC;
let keyD;
let keyE;
let keyF;
let keyG;
let keyA;
let keyB;

let splotchSize;

let button1;
let button2;

function setup() {
  serialPDM = new PDMSerial(portName);
  keyC = serialPDM.cPin;
  keyD = serialPDM.dPin;
  keyE = serialPDM.ePin;
  keyF = serialPDM.fPin;
  keyG = serialPDM.gPin;
  keyA = serialPDM.aPin;
  keyB = serialPDM.bPin;
  console.log(serialPDM.inData);

  sensors = serialPDM.sensorData;

  r = 0;
  g = 0;
  b = 0;

  splotchSize = 30;
  
  createCanvas(1200, 1200);
  
  button1 = createButton('DISTORTION ON');
  button1.position(50,1200);
  button1.mousePressed(lightOn);
  
  button2 = createButton('DISTORTION OFF');
  button2.position(300,1200);
  button2.mousePressed(lightOff);  
}

function draw() {
  background(255);

  if (sensors.p13 == 0){
    r = 250;
    g = 0;
    b = 0;
    noStroke();
    fill(r,g,b);
    circle(random(1200),random(1200),30);
    synth.triggerAttackRelease("C3", "8n", 0.25);
    console.log("RED");
  }
  
  if (sensors.p12 == 0){
    r = 250;
    g = 137;
    b = 0;
    noStroke();
    fill(r,g,b);
    circle(random(1200),random(1200),30);
    synth.triggerAttackRelease("D3", "8n", 0.25);
    console.log("ORANGE");
  }

  if (sensors.p10 == 0){
    r = 250;
    g = 250;
    b = 0;
    noStroke();
    fill(r,g,b);
    circle(random(1200),random(1200),30);
    synth.triggerAttackRelease("E3", "8n", 0.25);
    console.log("YELLOW");
  }

  if (sensors.p9 == 0){
    r = 0;
    g = 250;
    b = 0;
    noStroke();
    fill(r,g,b);
    circle(random(1200),random(1200),30);
    synth.triggerAttackRelease("F3", "8n", 0.25);
    console.log("GREEN");
  }

  if (sensors.p7 == 0){
    r = 0;
    g = 0;
    b = 250;
    noStroke();
    fill(r,g,b);
    circle(random(1200),random(1200),30);
    synth.triggerAttackRelease("G3", "8n", 0.25);
    console.log("BLUE");
  }

  if (sensors.p6 == 0){
    r = 250;
    g = 0;
    b = 250;
    noStroke();
    fill(r,g,b);
    circle(random(1200),random(1200),30);
    synth.triggerAttackRelease("A3", "8n", 0.25);
    console.log("PURPLE");
  }

  if (sensors.p4 == 0){
    r = 250;
    g = 250;
    b = 250;
    noStroke();
    fill(r,g,b);
    circle(random(1200),random(1200),30);
    synth.triggerAttackRelease("B3", "8n", 0.25);
    console.log("WHITE");
  }
}

// function redC() {
//   r = 250;
//   g = 0;
//   b = 0;
//   noStroke();
//   fill(r,g,b);
//   circle(random(1200),random(1200),30);
//   synth.triggerAttackRelease("C3", 0.25);
//   console.log("RED");
// }

// function orangeD() {
//   r = 250;
//   g = 137;
//   b = 0;
//   noStroke();
//   fill(r,g,b);
//   circle(random(1200),random(1200),30);
//   synth.triggerAttackRelease("D3", 0.25);
//   console.log("ORANGE");
// }

// function yellowE() {
//   r = 250;
//   g = 250;
//   b = 0;
//   noStroke();
//   fill(r,g,b);
//   circle(random(1200),random(1200),30);
//   synth.triggerAttackRelease("E3", 0.25);
//   console.log("YELLOW");
// }

// function greenF() {
//   r = 0;
//   g = 250;
//   b = 0;
//   noStroke();
//   fill(r,g,b);
//   circle(random(1200),random(1200),30);
//   synth.triggerAttackRelease("F3", 0.25);
//   console.log("GREEN");
// }

// function blueG() {
//   r = 0;
//   g = 0;
//   b = 250;
//   noStroke();
//   fill(r,g,b);
//   circle(random(1200),random(1200),30);
//   synth.triggerAttackRelease("G3", 0.25);
//   console.log("BLUE");
// }

// function purpleA() {
//   r = 250;
//   g = 0;
//   b = 250;
//   noStroke();
//   fill(r,g,b);
//   circle(random(1200),random(1200),30);
//   synth.triggerAttackRelease("A3", 0.25);
//   console.log("PURPLE");
// }

// function whiteB() {
//   r = 250;
//   g = 250;
//   b = 250;
//   noStroke();
//   fill(r,g,b);
//   circle(random(1200),random(1200),30);
//   synth.triggerAttackRelease("B3", 0.25);
//   console.log("WHITE");
// }

function keyPressed() {
  console.log(serialPDM.sensorsConnected());
  Tone.start;
}

function lightOn() {
  chorus.feedback.value = 0.5;
  serialPDM.transmit('on');
  console.log("ON");
}

function lightOff() {
  chorus.feedback.value = 0;
  serialPDM.transmit('off');
  console.log("OFF");
}