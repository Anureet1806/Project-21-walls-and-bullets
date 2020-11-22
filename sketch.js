var wall,thickness;
var bullet,weight,speed;


function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(400,1500);

  thickness=random(22,83);

  bullet=createSprite(50,200,50,5);
  bullet.velocityX=speed;
  bullet.shapeColor="white";

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="white";
}

function draw() {
  background("black");  

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor="green";
    }
    if(damage<10){
      wall.shapeColor="red";
    }
  }
  
  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge= wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}