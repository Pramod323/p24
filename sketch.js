 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,g1, fakeground, d1, d2, d3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

	fakeground = createSprite(200,340,400,20);
	fakeground.shapeColor = "brown"; 
	
	
	//Create the Bodies Here.

	ground = new Ground(600,340,400,20);
	g1 = new Ground(200,355,400,20);

	d1 = new Dustbin(589,320,170,20);
	d2 = new Dustbin(504,275,20,90);
    d3 = new Dustbin(672,275,20,90);

	paper = new Paper(90,280,30);
	
	Engine.run(engine);
}


function draw() {
	Engine.update(engine);
    rectMode(CENTER);
    background(0);

    ground.display();
	//g1.display();
    d1.display();
	d2.display();
	d3.display();
	paper.display();
    
    drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position, {x: 128, y: -128});
	}
}