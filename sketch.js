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
mangoTree=new Tree (1200,400);

mango1=new Mango (1200,300,50);
mango2=new Mango (1100,300,50);
mango3=new Mango (1100,200,50);
mango4=new Mango (1200,200,50);
mango5=new Mango (1200,150,50);
mango6=new Mango (1300,190,50);
mango7=new Mango (1300,190,50);
mango8=new Mango (1400,370,50);
mango9=new Mango (1400,310,50);
mango10=new Mango (1300,300,50);

groundObject = new Ground (800,680);
stoneObject =new Stone (550,543,60);

launchObject =new Launcher (stoneObject.body,{x:550,y:543});

Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  image(BoyImg,200,450,200,300);
  
//   detectCollision(stoneObj,mango1);
//   detectCollision(stoneObj,mango2);
//   detectCollision(stoneObj,mango3);
//   detectCollision(stoneObj,mango4);
//   detectCollision(stoneObj,mango5);

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
		Matter.Body.setPosition(stoneObj.body,{x:235,y:420})
		launcherObject.attach(stoneObj.body);
	}
}
function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body.false);
	}
}

function mouseDragged(){
    //if (gameState!=="launched"){
        //Matter.Body.setPosition(stoneObject.body, {x: mouseX , y: mouseY});
    //}
}


// function mouseReleased(){
//     slingshot.fly();
//     gameState = "launched";
// }


