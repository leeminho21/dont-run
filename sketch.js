var anything
var something


function setup() {
  createCanvas(800,400);
  anything=createSprite(400, 200, 50, 50);
  anything.shapeColor="black";

  something=createSprite(400, 350, 50, 50);
  something.shapeColor="black";
something.velocityX=1;
something.velocityY=1;
  aoa=createSprite(400, 50, 50, 50)
  aoa.shapeColor="black";
  aoa.velocityX=1;
  aoa.velocityY=1;
}

function draw() {
  background(235, 195, 87);  
  drawSprites();
  anything.y = World.mouseY;
  anything.x = World.mouseX;
  isTouching(anything, something);
  isTouching(anything, aoa);
  isTouching(anything, something);
  bounceOff(anything, something);
  bounceOff(anything, aoa);

}  

