const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinobj, paperobj, groundobj;
var world;

function setup() {
	createCanvas(1600, 700);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//paper = new Paper(100, 600, 70);
    paperobj = new Paper(200, 450, 70);

	//ground = new Ground(400, 680, 800, 20);
	groundobj = new Ground(width/2, 670, width, 20);

    dustbinobj = new Dustbin(1200,620, 250,20);
    //bin1 = new Dustbin(550, 620, 20, 100);
    //bin2 = new Dustbin(610, 660, 100, 20);
    //bin3 = new Dustbin(670, 620, 20, 100);
    
	var render = Render.create({
     element: document.body,
      engine: engine,
       options: { width: 1600, height: 700, wireframes: false } });
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  Engine.update(engine);

  //paper.display();
  paperobj.display();

  //ground.display();
  groundobj.display();

  dustbinobj.display();
  //bin.display();
  //bin1.display();
  //bin2.display();
  //bin3.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paperobj.body, paperobj.body.position, {x:53, y: -55})
	}
  }


