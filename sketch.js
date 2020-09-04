var Boy,BoyImg
var mangoTree
var mango1,mango2
var groundObject
var stoneObject
var launcherObject

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	BoyImg=loadImage('images/boy.png');

}

function setup() {
	
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
mangoTree=new Tree (970,280);

mango1=new Mango (1100,300,50);
mango2=new Mango (1000,300,50);
mango3=new Mango (1100,300,50);
mango4=new Mango (1100,200,50);
mango5=new Mango (1100,150,50);
mango6=new Mango (1200,190,50);
mango7=new Mango (1200,190,50);
mango8=new Mango (1360,320,50);
mango9=new Mango (1300,310,50);
mango10=new Mango (1200,300,50);

groundObject = new Ground (800,680);
stoneObject =new Stone (550,543,30);

launchObject =new Launcher (stoneObject.body,{x:250,y:530});

}


function draw() {
Engine.update(engine) 
  rectMode(CENTER);
  background(220);
  image(BoyImg,200,450,200,300);

  detectCollision(stoneObject,mango1);
  detectCollision(stoneObject,mango2);
  detectCollision(stoneObject,mango3);
  detectCollision(stoneObject,mango4);
  detectCollision(stoneObject,mango5);

mangoTree.display();

launchObject.display();

groundObject.display();

stoneObject.display();

mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
mango8.display();
mango9.display();
mango10.display();

 drawSprites();
 
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stoneObject.body,{x:235,y:420})
		launchObject.attach(stoneObject.body);
	}
}

function detectCollision(lstone,lmango){
	pos1=lstone.body.position
	pos2=lmango.body.position
	 // radius1 = lmango.radius; 
	 // radius2 = lstone.radius 
	 var distance = dist(pos1.x,pos1.y, pos2.x, pos2.y)
	  // console.log(distance) 
	  // console.log(lmango.radius+lstone.radius)
	   if(distance<=lmango.radius+lstone.radius) 
	  {
		   Matter.Body.setStatic(lmango.body,false);
		 } 
		}

function mouseDragged(){
        Matter.Body.setPosition(stoneObject.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
   launchObject.fly();
}




