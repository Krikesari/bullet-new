var wall, bullet, speed, weight, thickness



function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);

  bullet=createSprite(50,200,30,10);
  bullet.shapeColor=('white');
  wall=createSprite(1500,200,thickness,height/2);

  thickness=random(22,83);

  bullet.velocityX=speed;
}

function draw() {
  background(0,0,0);  

  

  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
var damage=0.5*weight*speed*speed/thicckness*thickness*thickness
bullet.velocityX=0
if(damage<10){
bullet.shapeColor=color('green');
}

If(damage>10){
bullet.shapeColor=color('red');
}


}
  
  drawSprites();
}