const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustbin;



function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20)
	paper = new Paper 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  var bBox = createSprite(350, 210, 200, 20);
  Matter.Body.setStatic(bBox , false);

  var lBox = createSprite(170, 110, 100, 20);
  Matter.Body.setStatic(lBox , false);

  var rBox = createSprite(570, 310, 200, 20);
  Matter.Bosy.setStatic(rBox, false);
  
  ground.display();
  paper.display();

  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x = 85, y = -85})
	}
}



