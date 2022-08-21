var bg,bg2,form,system,code,security;
var score=0;
var bg3
function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg")
  bg3=loadImage("aladdin_cave.jpg");
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 3) {
    clear()
    background(bg3)
    fill("black")
    textSize(40);
    
    text(" welcome to Level 2 solve thease riddles to unlock the truasure ",5,50)
    clues2();
  }







  drawSprites()
}