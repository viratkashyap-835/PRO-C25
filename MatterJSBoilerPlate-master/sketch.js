
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin, paper,ground;	
var world;


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paper=new Paper(200,450,70);
	ground=new Ground(width/2,670,width,20);
	dustbin=new Dustbin(500,650);
	//Create a Ground
	

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background("white");
 

  ground.display();
  dustbin.display();
  
  paper.display();
  
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paper.body,paper.body.position,{x:200,y:-200});

    
  	}
}



