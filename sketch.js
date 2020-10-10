
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree
var ground
var stone
var boy,boyImg
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10
var string
 var constraintStone
function preload()
{
	boyImg=loadImage("Plucking mangoes/boy.png")
	// CREATE A TREEIMG VARIABLE AND LOAD THE IMAGE
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	ground=new Ground(400,680,800,60)
	boy=createSprite(150,600,20,10)
	//ADD IMAGE TO BOY SPRITE
	boy.scale=0.11
	
	//CREATE STONE OBJECT
	//CREATE STRING OBJECT
	
	mango1=new Mango(580,200,30)//radius is actually 45 for all mangoes
	//CREATE 5-6 MANGO OBJECTS
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("lightblue");
  //DISPLAY GROUND
  //tree.display()
  image(treeimage,380,100,415,615)
  //DISPLAY STONE
  string.display()
  mango1.display()
  //DISPLAY ALL THE MANGO OBJECTS CREATED
  detectCollision(stone,mango1)
  //CALL DETECTCOLLISION() FOR THE OTHER MANGO OBJECTS
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:90,y:530})
		//ATTACH STRING OBJECT (REF ANGRY BIRD)
	}
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    string.fly();
}
function detectCollision(stone,mango){
	mangoBodyPosition=mango.body.position
	stoneBodyPosition=stone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	
if(distance<=mango.radius+stone.radius){
	
	Matter.Body.setStatic(mango.body,false)
}
}



