var bgImg;
var database;
var form, player;
var playerCount;

function preload() {
  bgImg = loadImage("assets/background.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  game = new Game()
  game.start()
}

function draw() {
 background(bgImg)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
