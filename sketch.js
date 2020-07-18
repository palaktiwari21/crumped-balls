
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	ground=new Ground(600,height,1200,20);

box1=new Dustbin(700,640,200,300);

ball=new Paper(200,200,40,80);
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0,0,0);

  keyPressed();
  drawSprites();
   box1.display();
   ball.display();
   ground.display();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(ball.body,ball.body.position,{x:55,y:-35});

  }
}