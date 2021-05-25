
var engine,world;
var weight,speed;
var bullet,wall, thickness; 

function setup() {
  createCanvas(1600,400);
  fill(80,80,80);
  wall=createSprite(1500,200,60,height/2);  
  
  bullet=createSprite(50,200,70,40);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  
  bullet.velocityX=speed
  
  
}

function draw() {

  
  if(bullet.isTouching(wall)){
    for(var x = 0;x<1;x=x+1){
    deformation();
    }
    bullet.velocityX=0
    
  }
  background(255,255,255);  
  drawSprites();
}

function deformation(){
if((0.5*weight*speed*speed)/(thickness*thickness*thickness)==0){
 bullet.shapeColor=color(0,0,0)
}else if((0.5*weight*speed*speed)/(thickness*thickness*thickness)<10&&(0.5*weight*speed*speed)/(thickness*thickness*thickness)>0){
  bullet.shapeColor=color(0,255,0)
}else if((0.5*weight*speed*speed)/(thickness*thickness*thickness)>10){
  bullet.shapeColor=color(255,0,0);
}

}