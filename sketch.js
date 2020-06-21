var paperBall, bin;
var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	paperBall = createSprite(100, 400, 20, 20);

	bin = createSprite(900, 400, 100, 100);

	ground = createSprite(600, 450, 1200, 10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  launchUp();
  launchDown();
  paperBall.display();
  bin.display();
  ground.display();
}
function launchUp(){
	if(keyCode === UP_ARROW){
		paperBall.velocityX = 5;
		paperBall.velocityY = -5;
	}
}
function launchDown(){
	if(keyCode === DOWN_ARROW){
		paperBall.velocityX = 5;
		paperBall.velocityY = 5;
	}
}
function binTouch(){
	if(paperBall.x === 900 && paperBall.y === 400){
		paperBall.visible = false;
	}
}
