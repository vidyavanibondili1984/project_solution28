
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var tre,gnd,stn;
var boyImage,boy;
var m1,m2,m3,m4,m5,m6,m7,m8;
var launch;
function preload()
{
	boyImage=loadImage("images/boy.png");

}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	tre=new Tree(700,500);
	gnd=new Ground(-50,180,1400,20);
	boy=createSprite(-500,120,20,50);
	boy.addImage(boyImage);
	boy.scale=0.1;
	stn=new Stone(-560,100,20)
	m1=new Mango(30,-10,60)
	m2=new Mango(100,-40,60)
	m3=new Mango(-30,-40,60)
	m4=new Mango(-90,-100,60)
	m5=new Mango(60,-80,60)
	m6=new Mango(-60,-50,60)
	m7=new Mango(-60,-170,60)
	m8=new Mango(100,-150,60)
	launch=new Launcher(stn.body,{x:-560,y:70});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  tre.display();
  gnd.display();
  stn.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();
	launch.display();
	detectCollision(stn,m1);
	detectCollision(stn,m2);
	detectCollision(stn,m3);
	detectCollision(stn,m4);
	detectCollision(stn,m5);
	detectCollision(stn,m6);
	detectCollision(stn,m7);
	detectCollision(stn,m8);

  drawSprites();
 
}
function mouseDragged()
{
	Matter.Body.setPosition(stn.body,{x:mouseX,y:mouseY});
}
function mouseReleased()
{
	launch.fly();
}
function keyPressed()
{
	if(keyCode===32)
	{
		Matter.Body.setPosition(stn.body,{x:-560,y:70});
		Launcher.attach(stn.body);
	}
}
function detectCollision(stone,mango)
{
	var mbp=mango.body.position;
	var sbp=stone.body.position;
	var distance=dist(sbp.x,sbp.y,mbp.x,mbp.y);
	if(distance<=mango.r+stone.r)
	{
		Matter.Body.setStatic(mango.body,false);
	}
}
