


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,paper;

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;

  

    //ground = Bodies.rectangle(400,540,800,10,ground_options);
   // World.add(world,ground);

    ground=new Ground(400,580,800,20);
    paper=new Paper (180,550,20);
  box1=new Box(500,530,20,80);
  box2=new Box (550,560,120,20);
  box3=new Box (600,520,20,60);
 

   // console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
   // rectMode(CENTER);
    //ellipseMode(RADIUS);
   // rect(ground.position.x,ground.position.y,800,10);
//	ellipse(ball.position.x,ball.position.y,10,10);
	
	

    text(mouseX+","+mouseY,mouseX,mouseY);

    ground.display();
    paper.display();
    box1.display();
    box2.display(); 
    box3.display();

    

   // keyPressed();

}

function keyPressed(){
	if(keyCode===UP_ARROW){ 
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}