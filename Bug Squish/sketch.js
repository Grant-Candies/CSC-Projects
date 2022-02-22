let spriteSheet;
let character = [];
let count = 10;
let startTime;
let gameState = 'wait';
let score = 1

function preload() {
  spriteSheet = loadImage("Bug.png");
}

function setup() {
  createCanvas(800, 800);
  imageMode(CENTER);
  for (i = 0; i < count; i++) {
    character[i] = new Character(spriteSheet),
    random(100, 700), random(100, 700), score, random([-1, 1]);
  }
}

function timer() {
  return int((millis() - startTime) / 1000)
}

function mousePressed() {
  let dmin = -1;
  let character_id = -1;
  for (i = 0; i < count; i++) {
    let d = character[i].grabCheck();
    if (d != -1) {
      if (dmin == -1 || d < dmin) {
        dmin = d;
        character_id = i;
      }
    }
  }
}

function mouseDragged() {
  for (i = 0; i < count; i++) {
    character[i].drag();
  }
}
  
function mouseReleased() {
  for (i = 0; i < count; i++) {
    character[i].drop();
  }
}

function draw() {
  background(255, 255, 255);
  if (gameState == 'wait') {
    textSize(30);
    text('Please click to begin the game', 150, 200);
    if (mouseIsPressed) {
      startTime = millis();
      gameState = 'playing';
    }
  }
  else if (gameState == 'playing') {
    for (i = 0; i < count; i++) {
      character[i].draw();
    }
    let time = timer()
    text("Time: " + (30 - time), 10, 30);
    text("Score: " + (score - 1), 10, 70)
    if (time > 30) {
      gameState = 'end';
    }
  }
  else if (gameState == 'end') {
    text("Game over, man!", 150, 200);
    text("Click to try again", 150, 300);
    if (mouseIsPressed) {
      startTime = millis();
      gameState = 'playing';
    }
  }
}

class Character{
  constructor(spriteSheet, x, y, speed, move) {
    this.spriteSheet = spriteSheet;
    this.x = x;
    this.y = y;
    this.facing = 1;
    this.speed = speed;
    this.move = move;
    this.facing = move;
    this.grabbed = false;
    this.spriteFrame = 0;
  }
  animate() {
    let sx, sy;
    if (this.move == 0) {
      if (this.grabbed) {
        sx = this.spriteFrame % 7 + 5;
        sy = 9;
      }
      else {
        sx = 0;
        sy = 0;
      }
    }
    else {
      sx = this.spriteFrame % 8 + 1;
      sy = 0;
    }
    
    return [sx, sy];
  }
  draw() {
    let x
    let y
    x = random(100, 700);
    y = random(100, 700);
    this.x = x;
    this.y = y;
    push();
    translate(this.x, this.y);
    scale(this.facing, 1);
    let [sx, sy] = this.animate();
    image(this.spriteSheet, 0, 0, 100, 100, 80 * sx, 80 * sy, 95, 95);
    if (frameCount % 5) {
      this.spriteFrame += 1;
    }
    this.x += this.speed * this.move;
    if (this.x < 30) {
      this.move = -1;
      this.facing = -1;
    }
    else if (this.x > width - 30) {
      this.move = -1
      this.facing = -1;
    }
    pop();
  }
  go(direction) {
    this.move = direction;
    this.facing = direction;
    this.sx = 3;
  }
  stop() {
    this.move = 0;
  }
  grabCheck() {
    let d = -1;
    if (mouseX > this.x - 20 && mouseX < this.x + 20 && 
      mouseY > this.y - 20 && mouseY < this.y + 20) {
      d = dist(mouseX, mouseY, this.x, this.y);
    }
    return d;
  }
  grab() {
    {
      this.stop();
      this.grabbed = true;
      this.offsetX = this.x - mouseX;
      this.offsety = this.y - mouseY;
    }
  }
  drag() {
    if (this.grabbed) {
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY;
    }
  }
  drop() {
    if (this.grabbed) {
      score++;
      remove(character[i]);
    }
  }
}