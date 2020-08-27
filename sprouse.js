function isTouching(sprite1, sprite2){
    if (Math.abs(sprite1.y-sprite2.y)<50 && Math.abs(sprite1.x-sprite2.x)<50) {
      sprite1.shapeColor="white";
      sprite2.shapeColor="white";
    }
    else{
      sprite1.shapeColor="black";
      sprite2.shapeColor="black";
    }
  }
  function bounceOff(sprite1, sprite2){
    if (Math.abs(sprite1.y-sprite2.y)<50 && Math.abs(sprite1.x-sprite2.x)<50) {
      sprite1.velocityX=sprite1.velocityX*-1;
      sprite1.velocityY=sprite1.velocityY*-1;
      sprite2.velocityX=sprite2.velocityX*-1;
      sprite2.velocityY=sprite2.velocityY*-1;
    }
  }
  