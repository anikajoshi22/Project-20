var car;
var wall;
var speed;
var weight;

function preload(){

}

function setup() {
  speed=random(55,90);
  weight=random(400,1500);
  createCanvas(400,400);
   wall=createSprite(350,200,60,200);
  wall.shapeColor="gray";
  car=createSprite(50,200,50,50);
  car.shapeColor="white";
}

function draw() {
  background("black");
car.velocityX=speed;

  
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocity=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180){
      car.shapeColor=color(255,0,0);
    }
    if(deformation<180&&deformation>100){
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      car.shapeColor=color(0,255,0);
    }
  }
  
  
  
  
  
  
 drawSprites(); 
}