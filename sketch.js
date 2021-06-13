frameRate = 60;

var bgImg;
var snow = [];
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 800, 400);
  engine = Engine.create();
  world = engine.world;

  bgImg = loadImage("snow1.jpg");

  //snow = new Snow(random(0, 800), 100, 50, 50);

  

}

function draw() {
  background(bgImg);

  Engine.update(engine);

  spawnSnow()
  

  drawSprites();
}

function spawnSnow(){
	if (frameCount%1 === 0){
        snow.push(new Snow(random(50, 800),0 , 10, 10));
	}
	for (var s = 0; s < snow.length; s++){
		snow[s].display();
	}
}