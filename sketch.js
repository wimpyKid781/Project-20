var car, wall
var speed, weight
var deformation

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
 car.velocityX = speed;
  wall = createSprite(1500,200,60, height/2)
  speed=random(55,90);
  weight=random(400,1500)
}

function draw() {
  background(255,255,255);
deformation = 0.5*weight*speed*speed/22500
if (deformation<100){
  car.shapeColor = (0,255,0)
}
if (deformation>=100){
  if (deformation<=180){
  car.shapeColor = (230,230,0)
  }
}
if (deformation>180){
  car.shapeColor = (255,0,0)
}
  
  drawSprites();
}