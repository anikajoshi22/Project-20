var fixedRect, movingRect;

var ob1, ob2,ob3,ob4;
function setup() {
  createCanvas(800,400);
  ob1 = createSprite(400, 200, 50, 50);
  ob2 = createSprite(100,350,50,60);
ob3 = createSprite(200, 200, 50, 50);
 ob4 = createSprite(250,300,50,30); 
 
  ob3.shapecolor = "green";
}
//hi!
function draw() {

  background("lime"); 


fill("yellow");
line(400,200,425,200);

  ob2.x = World.mouseX;
  ob2.y = World.mouseY;

  
if(isTouching(ob3,ob2))
{
  ob3.shapecolor = "pink";
  ob2.shapecolor = "blue";
}


  //if( fixedRect.y - movingRect.y === fixedRect.height/2 +movingRect.height/2 || movingRect.y - fixedRect.y === fixedRect.height/2 + movingRect.height/2){
    //movingRect.shapeColor="red";
   // fixedRect.shapeColor="red";

  //}

  drawSprites();
}

function isTouching(ob1,ob2){

  if(ob1.x - ob2.x ===  ob2.width/2 +ob1.width/2 || ob2.x - ob1.x === ob1.width/2 +ob2.width/2 || ob1.y - ob2.y === ob1.height/2 +ob2.height/2 || ob2.y - ob1.y === ob1.height/2 + ob2.height/2){
    return true;

  }

else{
 return false;
  
}



}