var fixedRect, movingRect;
var ob1,ob2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  ob1 = createSprite(0,400,50,80);
  ob2 = createSprite(1200,400,50,80);

  ob1.shapeColor = "yellow";
  ob2.shapeColor = "yellow";
  ob1.velocityX = 3;
  ob2.velocityX = -3;





}

function draw() {
  background(0,0,0);  

  
  
  bouncing(ob1,ob2);
  bouncing(fixedRect,movingRect);  
  
  drawSprites();
}





