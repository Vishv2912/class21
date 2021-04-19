


function setup() {
  createCanvas(1000,400);
moving=createSprite(100,200,50,50);
fixed=createSprite(200,200,50,50);
fixed2=createSprite(400,200,50,50);
fixed3=createSprite(600,200,50,50);
fixed4=createSprite(800,200,50,50);


moving.shapeColor="red";
fixed.shapeColor="red";
}

function draw() {
  
  background(255,255,255);  
  drawSprites();
moving.x=mouseX;
moving.y=mouseY;


if(isTouching(fixed2,moving)){
  moving.shapeColor="blue";
  fixed2.shapeColor="blue";
 
}else{
  moving.shapeColor="red";
  //fixed.shapeColor="red";
  fixed2.shapeColor="red";

}

}

