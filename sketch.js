var bg;
var sleep, brush, gym, eat, drink, move;


function preload(){
  bg = loadImage("Images/iss.png");
  sleep = loadAnimation("Images/sleep.png");
  brush = loadAnimation("Images/brush.png");
  gym = loadAnimation("Images/gym1.png","Images/gym2.png");
  eat = loadAnimation("Images/eat1.png","Images/eat2.png");
  drink = loadAnimation("Images/drink1.png","Images/drink2.png");
  moving = loadAnimation("Images/moving1.png","Images/moving2.png");
  bath = loadAnimation("Images/bath1.png","Images/bath2.png");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background(bg);
 createEdgeSprites();

 text("Instructions:",15,25);
 text("W = Brushing",15,40);
 text("S = Exercising",15,55);
 text("A = Bathing",15,70);
 text("D = Eating",15,85);
 text("M = Moving",15,100);

 if(keyCode === 87){
   astronaut.addAnimation("brushing", brush);
   astronaut.changeAnimation("brushing");
   astronaut.y = 350;
   astronaut.x = 230
   astronaut.velocityX = 0;
   astronaut.velocityY = 0;
 }

 if(keyCode === 83){
   astronaut.addAnimation("exercising", gym);
   astronaut.changeAnimation("exercising");
   astronaut.y = 250;
   astronaut.x = 570;
   astronaut.velocityX = 0;
   astronaut.velocityY = 0;
 }

 if(keyCode === 68){
   astronaut.addAnimation("eating", eat);
   astronaut.changeAnimation("eating");
   astronaut.y = 200;
   astronaut.x = 350;
   astronaut.velocityX = 0;
   astronaut.velocityY = 0;
 }

 if(keyCode === 65){
   astronaut.addAnimation("bathing", bath);
   astronaut.changeAnimation("bathing");
   astronaut.y = 300;
   astronaut.x = 400;
   astronaut.velocityX = 0;
   astronaut.velocityY = 0;
 }

 if(keyCode === 77){
   astronaut.addAnimation("moving", moving);
   astronaut.changeAnimation("moving");
   astronaut.y = 260;
   astronaut.x = 600;
   astronaut.velocityX = 0;
   astronaut.velocityY = 0;
 }

  drawSprites();
}