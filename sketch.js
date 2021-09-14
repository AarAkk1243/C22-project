const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof, r1, r2, r3, r4, r5, b1, b2, b3, b4, b5;



function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options = {
		isStatic: true
	}

	roof = Bodies.rectangle(400, 100, 230, 20, roof_options);
	World.add(world, roof);

	var ball_options = {
		isStatic: false
	}

	b1 = Bodies.circle(320, 360, 20, ball_options);
	World.add(world, b1);
	b2 = Bodies.circle(360, 360, 20, ball_options);
	World.add(world, b2);
	b3 = Bodies.circle(400, 360, 20, ball_options);
	World.add(world, b3);
	b4 = Bodies.circle(440, 360, 20, ball_options);
	World.add(world, b4);
	b5 = Bodies.circle(480, 360, 20, ball_options);
	World.add(world, b5);

	r1 = new Rope(roof,b1,-80,0);
	r2 = new Rope(roof,b2,-40,0);
	r3 = new Rope(roof,b3,0,0);
	r4 = new Rope(roof,b4,40,0);
	r5 = new Rope(roof,b5,80,0);


	Engine.run(engine);


}

function draw() {
	rectMode(CENTER);
	background("#99004d");

	rect(roof.position.x, roof.position.y, 230, 20);

	

	ellipseMode(RADIUS);
	ellipse(b1.position.x,b1.position.y,20,20);
	ellipse(b2.position.x,b2.position.y,20,20);
	ellipse(b3.position.x,b3.position.y,20,20);
	ellipse(b4.position.x,b4.position.y,20,20);
	ellipse(b5.position.x,b5.position.y,20,20);

	r1.display();
	r2.display();
	r3.display();
	r4.display();
	r5.display();
}

function keyPressed(){
	if(keyCode==RIGHT_ARROW){
		console.log(b1)
		console.log(b1.position)
		Matter.Body.applyForce(b1,b1.position,{x:-0.02, y:-0.02});

	}
}
