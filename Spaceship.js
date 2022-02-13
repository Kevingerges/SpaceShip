//Variables
var turnRate = 3;
var asteroidQty = 11;
var bufferSize = 100;
var ship = createSprite(200,200);
var asteroids = [];
var control = "MOUSE";
//Sprites
ship.setAnimation("Ship");
var buffer = createSprite(200,200);
buffer.setAnimation("buffer");
buffer.debug = true;
buffer.setCollider("circle",0,0, bufferSize);
buffer.alpha = 0.01;
var asteroidsImage = ["coal", "diamonds","ruby","emerald","silver"];

for (var i = 0 ; i < asteroidQty; i++) {
  asteroids[i] = createSprite(randomNumber(0,400),randomNumber(0,400));
asteroids[i].setAnimation(asteroidsImage [randomNumber(0,4)]);
ship.debug = true;
asteroids[i].debug = true;
asteroids[i].setCollider("circle");
asteroids[i].rotationSpeed = randomNumber(-30,30)/10;
asteroids[i].setSpeedAndDirection(randomNumber(5,20)/10, Math.random()*360);
while (asteroids[i].isTouching(buffer)) {
  asteroids[i].x = randomNumber(0,400);
  asteroids[i].y = randomNumber(0,400);
}
}

function draw() {
  background("black");
  asteroidWrap();
  if (keyWentDown("m")) {
    if (control == "MOUSE") {
      control = "KEYBOARD";
    } else {
      control = "MOUSE";
    }
  }
  if (control == "MOUSE") {
    mouseControl();
  } else {
    keyControl();
  }
  keyControl();
  drawSprites();
  display();
}
function display() {
  fill("white");
  textSize(30);
  textAlign(RIGHT, BOTTOM);
  text(control, 390, 390);
}
function keyControl() {
  if (keyDown("left") || keyDown("a")) {
    ship.rotation -= turnRate;
  }
  if (keyDown("Right") || keyDown("a")) {
    ship.rotation += turnRate;
  }
}

function mouseControl() {
  ship.pointTo(World.mouseX, World.mouseY);
}
function asteroidWrap(){
  for (var i = 0; i < asteroidQty; i++){
if (asteroids[i].x < -50){
  asteroids[i].x = 450;
  asteroids[i].setAnimation(asteroidsImage [randomNumber(0,4)]);
}
  if (asteroids[i].x > 450){
    asteroids[i].x = -50;
    asteroids[i].setAnimation(asteroidsImage [randomNumber(0,4)]);
  }
  if (asteroids[i].y < -50){
    asteroids[i].y = 450;
    asteroids[i].setAnimation(asteroidsImage [randomNumber(0,4)]);
  }
  if (asteroids[i].y > 450){
    asteroids[i].y = -50;
    asteroids[i].setAnimation(asteroidsImage [randomNumber(0,4)]);
  }
}
}
  
