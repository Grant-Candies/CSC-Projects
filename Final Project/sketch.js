// https://www.youtube.com/shorts/YFCEPL3GWgs

let serialPDM;
let portName = "COM3";

let r;
let g;
let b;

let keyA;
let keyB;
let keyC;
let keyD;
let keyE;
let keyF;
let keyG;

let button1;
let button2;

function setup() {
  serialPDM = new PDMSerial(portName);
  keyA = serialPDM.aPin;
  keyB = serialPDM.bPin;
  keyC = serialPDM.cPin;
  keyD = serialPDM.dPin;
  keyE = serialPDM.ePin;
  keyF = serialPDM.fPin;
  keyG = serialPDM.gPin;
  console.log(serialPDM.inData);

  r = 0;
  g = 0;
  b = 0;
  
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
  circle([sensor.a0,50,50]);
}

function redA() {
  r = 250;
  g = 0;
  b = 0;
  noStroke();
  fill(r,g,b);
  circle(random(1200),random(1200),30);
}

function orangeB() {
  r = 250;
  g = 137;
  b = 0;
  noStroke();
  fill(r,g,b);
  circle(random(1200),random(1200),30);
}

function yellowC() {
  r = 250;
  g = 250;
  b = 0;
  noStroke();
  fill(r,g,b);
  circle(random(1200),random(1200),30);
}

function greenD() {
  r = 0;
  g = 250;
  b = 0;
  noStroke();
  fill(r,g,b);
  circle(random(1200),random(1200),30);
}

function blueE() {
  r = 0;
  g = 0;
  b = 250;
  noStroke();
  fill(r,g,b);
  circle(random(1200),random(1200),30);
}

function purpleF() {
  r = 250;
  g = 0;
  b = 250;
  noStroke();
  fill(r,g,b);
  circle(random(1200),random(1200),30);
}

function whiteG() {
  r = 250;
  g = 250;
  b = 250;
  noStroke();
  fill(r,g,b);
  circle(random(1200),random(1200),30);
}

function lightOn() {
  serialPDM.transmit('on');
  console.log("ON");
}

function lightOff() {
  serialPDM.transmit('off');
  console.log("OFF");
}